import { useState, useCallback, useRef, useEffect } from "react";
import { backendEndpoint } from "../../global/endpoints";

export const usePostRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (formTypeDestination, requestData = null) => {
      setIsLoading(true);

      const storedData = JSON.parse(localStorage.getItem("userData"));
      let token;

      if (storedData && storedData.userEmail && storedData.token) {
        console.log("Login", storedData);
        token = storedData.token;
      }

      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);

      const requestOptions = {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: { "Content-Type": "application/json", token: token },
      };
      try {
        const response = await fetch(
          `${backendEndpoint}/${formTypeDestination}`,
          requestOptions
        );

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortController
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};

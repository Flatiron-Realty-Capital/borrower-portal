const isDebug = false;

export const backendEndpoint = isDebug
  ? "http://127.0.0.1:8000/"
  : "https://frcbackend.azurewebsites.net";

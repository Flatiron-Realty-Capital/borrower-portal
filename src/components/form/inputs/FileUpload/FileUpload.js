import React, { useState } from "react";
import "./FileUpload.css";
import { FileUploader } from "react-drag-drop-files";
import { useDispatch } from "react-redux";
import {
  setFormState,
  updateFormState,
} from "../../../../redux/actions/formStateActions";
import FormField from "../../shared/FormField/FormField";
import FormLabel from "../../shared/FormLabel/FormLabel";
// import "./FileUpload.css";

const FileUpload = (props) => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const handleChange = (file) => {
    console.log(file);
    setFile(file);
    dispatch(updateFormState({ key: "photoId", value: file }));
  };
  const fileTypes = ["JPEG", "JPG", "PNG", "GIF", "PDF"];
  return (
    <FormField id="file-upload">
      <FormLabel text="Please upload a photo ID" />
      <FileUploader
        name="sda"
        handleChange={handleChange}
        label="Click or drag file to upload"
        types={fileTypes}
        hoverTitle="Drop here"
        multiple={false}
      />
      {/* <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
    </FormField>
  );
};

export default FileUpload;

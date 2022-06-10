import React, { useState, useCallback, useRef, useEffect } from "react";
import "./FileUpload.css";
import Dropzone from "react-dropzone";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import {
  setFormState,
  updateFormState,
} from "../../../../redux/actions/formStateActions";
import FormField from "../../shared/FormField/FormField";
import FormLabel from "../../shared/FormLabel/FormLabel";
// import "./FileUpload.css";

const FileUpload = (props) => {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const fileTypes = ["JPEG", "JPG", "PNG", "GIF", "PDF"];
  const imageUploadRef = useRef(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpg"],
      "application/pdf": [".pdf"],
    },
    onDrop: (acceptedFiles) => {
      let previewUrl = URL.createObjectURL(acceptedFiles[0]);
      // console.log(preview);
      dispatch(
        updateFormState({
          key: "fileUpload",
          value: previewUrl,
        })
      );
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const clearFileHandler = () => {
    setFiles([]);
  };

  const fileThumbnails = files.map((file) => (
    <div key={file.name} className="file-upload-preview">
      <button onClick={clearFileHandler} id="close" className="icon-wrapper">
        {closeIcon}
      </button>
      {file.type === "application/pdf" ? (
        <div id="pdf" className="icon-wrapper">
          {pdfIcon}
        </div>
      ) : (
        <img src={file.preview} alt="" srcset="" />
      )}

      <p className="file-path"> {file.path}</p>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);
  return (
    <FormField id="file-upload">
      <FormLabel text="Please upload a photo ID" />

      <div className="file-upload-inner-content">
        <div {...getRootProps({ className: "file-upload-box" })}>
          <input {...getInputProps()} />

          {uploadIcon}
          <span className="file-upload__title">
            Drag 'n' drop some files here, or click to select files
          </span>
        </div>
        {fileThumbnails}
      </div>

      {/* {files && filePreview} */}
      {/* <FileUploader
        name="sda"
        handleChange={handleChange}
        label="Click or drag file to upload"
        types={fileTypes}
        hoverTitle="Drop here"
        multiple={false}
      />
      {file && (
        <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
      )}
      {file && filePreview} */}
    </FormField>
  );
};

export default FileUpload;
const uploadIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M11 15h2V9h3l-4-5-4 5h3z"></path>
    <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
  </svg>
);
const closeIcon = (
  <svg viewBox="0 0 24 24">
    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
  </svg>
);
const pdfIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z"></path>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319.254.202.426.533.426.923-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426.415.308.675.799.675 1.504 0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z"></path>
  </svg>
);

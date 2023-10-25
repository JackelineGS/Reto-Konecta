import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import illustration_upload from "../assets/img/illustration_upload.png";

export function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const cardStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(1, 153, 145, 0.041)",
    padding: "20px",
    width: "230px",
    height: "260px",
  };

  const imageStyles = {
    width: "100%",
    marginBottom: "20px",
  };

  const labelStyles = {
    cursor: "pointer",
  };

  return (
    <Card style={cardStyles}>
      <img
        src={illustration_upload}
        alt='imagen-uploadCv'
        style={imageStyles}
      />

      <label htmlFor='file-upload' style={labelStyles}>
        <Typography variant='h5' component='div' textAlign='center'>
          Subir mi CV
        </Typography>
        <Typography variant='body2' color='text.secondary' textAlign='center'>
          Formatos permitidos: doc, docx, PDF
        </Typography>
      </label>
      <input
        type='file'
        id='file-upload'
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
    </Card>
  );
}

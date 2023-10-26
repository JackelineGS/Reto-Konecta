import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import illustration_upload from "../assets/img/illustration_upload.png";
import { BubbleChat } from "flowise-embed-react";

export function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      // vista previa para el archivo
      const reader = new FileReader();
      reader.onload = (event) => {
        setFilePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
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


  const App = () => {
    return (
        <BubbleChat chatflowid="561008a9-fa01-4597-a243-723cae8c2cfb" apiHost="https://konecta-1.onrender.com" />
    );
};

  return (
    <Card style={cardStyles}>
      {filePreview ? (
        <img
          src={filePreview}
          alt='file-preview'
          style={{ maxWidth: "100%" }}
        />
      ) : (
        <>
          <img
            src={illustration_upload}
            alt='imagen-uploadCv'
            style={imageStyles}
          />
          <label htmlFor='file-upload' style={labelStyles}>
            <Typography variant='h5' component='div' textAlign='center'>
              Subir mi CV
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              textAlign='center'
            >
              Formatos permitidos: doc, docx, PDF
            </Typography>
          </label>
        </>
      )}

      <input
        type='file'
        id='file-upload'
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
      <BubbleChat chatflowid="561008a9-fa01-4597-a243-723cae8c2cfb" apiHost="https://konecta-1.onrender.com" />
    </Card>
  );
}

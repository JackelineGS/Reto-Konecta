import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import illustration_upload from "../assets/img/illustration_upload.png";
import { BubbleChat } from "flowise-embed-react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";

export function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [pdfText, setPdfText] = useState(null);
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "../../node_modules/pdfjs-dist/build/pdf.worker.js";

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    console.log(pdfjsLib);

    if (file) {
      setSelectedFile(file);
      // vista previa para el archivo
      const reader = new FileReader();
      reader.onload = (event) => {
        setFilePreview(event.target.result);

        // Extraer texto del PDF
        // const pdfFile = new Uint8Array(event.target.result);
        const pdfFile = URL.createObjectURL(file);
        pdfjsLib.getDocument(pdfFile).promise.then((pdfDoc) => {
          let fullText = "";
          for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
            pdfDoc.getPage(pageNum).then((page) => {
              page.getTextContent().then((textContent) => {
                const pageText = textContent.items
                  .map((item) => item.str)
                  .join(" ");
                fullText += pageText + "\n";
                if (pageNum === pdfDoc.numPages) {
                  setPdfText(fullText);
                }
              });
            });
          }
          console.log(fullText);
        });
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
          alt='documento cargado'
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
      
      {pdfText && (
        <div>
          <Typography variant='h6'>Texto del PDF:</Typography>
          <pre>{pdfText}</pre>
        </div>
      )}
        <BubbleChat chatflowid="561008a9-fa01-4597-a243-723cae8c2cfb" apiHost="https://konecta-1.onrender.com" />
    </Card>
  );
}

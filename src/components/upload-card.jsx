import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import illustration_upload from "../assets/img/illustration_upload.png";
import { BubbleChat } from "flowise-embed-react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import { SuccessAlert } from "./successAlert";
import { CircularProgress, Container } from "@mui/material";
import { WarningAlert } from "./warningAlert";
import { ErrorAlert } from "./errorAlert";
import { PinkButton } from "./pink-button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [pdfText, setPdfText] = useState(null);
  const [upload, setUpload] = useState(false);
  // const [cvText,setCvText] = useState(null)
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "../../node_modules/pdfjs-dist/build/pdf.worker.js";
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const openModal = () => {
    console.log(pdfText, "aqui cvText");
    sessionStorage.setItem("cv", pdfText);
    navigate(`/modal/validando/${id}`);
  };

  const openRedirigiendo = () => {
    navigate(`/modal/redirigiendo/${id}`);
  };

  //flowise

  async function query(data) {
    try {
      console.log(data);
      const response = await fetch(
        "https://konecta-1.onrender.com/api/v1/prediction/c7913cb8-def5-4393-a7b9-3717e2646d95",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      // console.log(result);
      return result;
    } catch (error) {
      throw new Error(`HTTP error! Status: ${response.status}`);

      // console.error("Error in fetch request:", error);
    }
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    console.log(pdfjsLib);

    if (file) {
      setUpload(true);
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
              page.getTextContent().then(async (textContent) => {
                const pageText = textContent.items
                  .map((item) => item.str)
                  .join(" ");
                fullText += pageText + "\n";
                if (pageNum === pdfDoc.numPages) {
                  setPdfText(fullText);

                  try {
                    const response = await query({ question: fullText });

                    if (!response) {
                      return;
                    }

                    console.log(response);

                    if (response.includes("completo")) {
                      setUpload(false);
                      setShowSuccessAlert(true);
                    } else if (response.includes("incompleto")) {
                      // Muestra una alerta de advertencia
                      setUpload(false);
                      setShowWarningAlert(true);
                    } else {
                      // Muestra una alerta de error
                      setUpload(false);
                      setShowErrorAlert(true);
                    }
                  } catch (error) {
                    setShowErrorAlert(true);
                    // Maneja cualquier error que pueda ocurrir en la función 'query' o en el bloque try
                    console.error("Ocurrió un error:", error);
                  }
                }
              });
            });
          }
          // console.log(fullText);
          // setCvText(fullText)
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
    <Container>
      <Card style={cardStyles}>
        {filePreview ? (
          <img
            src={filePreview}
            alt="documento cargado"
            style={{ maxWidth: "100%" }}
          />
        ) : (
          <>
            <img
              src={illustration_upload}
              alt="imagen-uploadCv"
              style={imageStyles}
            />
            <label htmlFor="file-upload" style={labelStyles}>
              <Typography variant="h5" component="div" textAlign="center">
                Subir mi CV
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                Formatos permitidos: doc, docx, PDF
              </Typography>
            </label>
          </>
        )}

        <input
          type="file"
          id="file-upload"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />

        {/* {pdfText && (
        <div>
          <Typography variant='h6'>Texto del PDF:</Typography>
          <pre>{pdfText}</pre>
        </div>
      )} */}
      </Card>
      {showSuccessAlert && (
        <SuccessAlert message="La información está completa" />
      )}
      {showWarningAlert && (
        <WarningAlert message="La información está incompleta" />
      )}
      {showErrorAlert && (
        <ErrorAlert message="Hubo un error al procesar la información" />
      )}
      {/* <PinkButton onClick={openModal} /> */}
      {upload ? (
        <div style={{ textAlign: "center", padding: "3%" }}>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <button onClick={showSuccessAlert ? openModal : openRedirigiendo}>
          Siguiente
        </button>
      )}
    </Container>
  );
}

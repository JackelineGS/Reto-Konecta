import React, { useState } from "react";
import {
  Typography,
  Modal,
  Box,
  Button,
  Grid,
  Card,
  Checkbox,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Artboard from "../assets/img/Artboard.png";

// import ModalValidarDatos from "./modalValidarDatos";
// import validar from "../assets/img/validar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "28px",
  transform: "translate(-50%, -50%)",
  width: 720,
  height: "Hug 480px",
  backgroundColor: "#FFFFFF",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
};

const styleLetra = {
  color: "#CE0F69",
  margin: "24px",
  fontFamily: "Barlow",
  fontWeight: "600",
  fontSize: "20px",
  borde: "none",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

const styleSubtitle = {
  color: "#181818",
  width: "649px",
  fontFamily: "Barlow",
  fontWeight: "400",
  fontSize: "14px",
  alignItems: "center",
  margin: "1rem",
  textAling: "center",
  justifyContent: "center",
  display: "flex",
};

const CssButton = styled(Button)({
  backgroundColor: "#CE0F69",
  color: "white",
  borderRadius: "8px",
  padding: "6px 16px",
  cursor: "pointer",
  margin: "5px",

  "&:hover": {
    backgroundColor: "#B2BAC2",
  },

  "&:disabled": {
    backgroundColor: "#D9D8D8",
    cursor: "default",
  },
});

const imagenes = {
  bienvenida: Artboard,
  title: 'bienvenida validacion'
}

export default function ModalBienvenida() {
  const [open, setOpen] = useState(true);
  const { id } = useParams();
  console.log(id)
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false); // Estado para el checkbox
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // Estado para habilitar/deshabilitar el botón

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setIsButtonEnabled(!isChecked); // Habilita el botón cuando el checkbox esté marcado
  };

  const openValidarDatos = () => {
    navigate(`/modal/bienvenida/validacion/${id}`);
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            <Container  style={{
                alignItems: "center",
              }}> 
            <img src={imagenes.bienvenida}
          />
              
              
            
            </Container>
            <Typography sx={styleLetra}>
              ¡Bienvenid@ a la evaluación!
            </Typography>
            <Typography sx={styleSubtitle}>
              Soy Kami y estoy aquí para ayudarte a alcanzar tus metas
              profesionales. Juntos, analizaremos tus necesidades y las
              oportunidades que tenemos para tu búsqueda de empleo.
            </Typography>
            <Card
              style={{
                display: "flex",
              }}
            >
              <Checkbox
                checked={isChecked}
                onChange={handleCheckboxChange}
              ></Checkbox>
              <Typography sx={styleSubtitle}>
                He leído y acepto la Política de Privacidad de los postulantes
              </Typography>
            </Card>
            <CssButton disabled={!isButtonEnabled} onClick={openValidarDatos}  >Iniciar</CssButton>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

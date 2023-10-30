import React, { useState } from "react";
import { Typography, Modal, Box, Button, Grid, Container } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import estado from "../assets/img/Artboard2.png";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: "28px",
    transform: 'translate(-50%, -50%)',
    width: 720,
    height: 'Hug 481.25px',
    backgroundColor: '#FFFFFF',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: 'flex'
  };
  
  const styleLetra = {
    color: "#181818",
    margin: '1rem',
    fontFamily: "Barlow",
    fontWeight: "600",
    fontSize: "20px",
    borde: 'none',
    justifyContent: "center",
    alignItems:"center",
    display: 'flex'
  }

  const styleSubtitle = {
    color: "#181818",
    width: '649px',
        fontFamily: "Barlow",
        fontWeight: "400",
        fontSize: "14px",
        alignItems:"center",
        lineHeight: "22px",
        margin: '1rem',
        textAling: "center", 
        justifyContent: 'center',
        display: "flex"
  }

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

export default function ModalEstadotercero() {

    
    const [open, setOpen] = useState(true);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate()

    const { id } = useParams();
    console.log(id)

    const UploadCv = () => {
      navigate(`/cargarCv/${id}`)
    }


  return (
    <div>
    {/* <Button onClick={handleOpen}>Open modal</Button> */}
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
        <Grid
         container
         direction="column"
         justifyContent="center"
         alignItems= 'center'
         alignContent= 'center'
        >
            <Container
            style={{
              alignItems: "center",
              justifyContent: 'center',
              width: '50%'
            }}
                >
                <img src={estado} />
                </Container>
                <Typography sx={styleLetra}>TE ENCUENTRAS EN EVALUACIÓN</Typography>
                <Typography sx={styleSubtitle}>Hola Carlos, actualmente te encuentras
                 en un proceso de evaluación para Asesor de ATC Rímac Seguros, estas a
                  tiempo de resolver las  pruebas y continuar tu proceso.</Typography>
                <CssButton onClick={UploadCv} >Continuar</CssButton>
        </Grid>
      </Box>
    </Modal>

  </div>
  
  )
}
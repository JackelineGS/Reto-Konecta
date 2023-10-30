// import * as React from 'react';
import React, { useState } from "react";
import {
  Typography,
  Modal,
  Box,
  Button,
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "28px",
  transform: "translate(-50%, -50%)",
  width: 720,
  height: "Hug 1,216px",
  backgroundColor: "#FFFFFF",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
};

const styleLetra = {
  color: "#181818",
  margin: "24px",
  fontFamily: "Barlow",
  fontWeight: "600",
  fontSize: "20px",
  borde: "none",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

const stylelabel = {
  color: "#181818",
  marginLeft: "1rem",
  fontFamily: "Barlow",
  fontWeight: "400",
  fontSize: "16px",
  borde: "none",
  justifyContent: "left",
  alignItems: "left",
  display: "flex",
};

const CssTextField = styled(TextField)({
  margin: "5px",
  width: "624px",
  height: "56px",
  borderRadius: "8px",
  display: "block",
  marginBottom: "1.5rem",

  "& label.Mui-focused": {
    color: "#CE0F69",
    borderRadius: "8px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#D9D8D8",
    },
    "&:hover fieldset": {
      borderColor: "#ECECEC",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#CE0F69",
    },
  },
});

const CssButton = styled(Button)({
  backgroundColor: "#CE0F69",
  color: "white",
  borderRadius: "8px",
  padding: "6px 16px",
  cursor: "pointer",
  margin: "5px",
  width: "194px",
  height: "48px",

  "&:hover": {
    backgroundColor: "#B2BAC2",
  },

  "&:disabled": {
    backgroundColor: "#D9D8D8",
    cursor: "default",
  },
});

const styleAutocomplete = {
  margin: "5px",
  width: "624px",
  height: "56px",
  borderRadius: "8px",
  display: "block",
  marginBottom: "1.5rem",
};

export default function ModalValidarDatos() {

  const [isFormComplete, setIsFormComplete] = useState(false);
  const [data, setData] = useState({tipoDocumento:""})
  const [open, setOpen] = useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()
  const { id } = useParams();
  // console.log(id)

  const fetchValidarDatos = async (document) => {
    var requestOptions = {
      method: 'GET',
    };
    
  let response = await  fetch(`https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/applicants/doc/${document}`, requestOptions)
      response = await response.json()
      response = response.data
      // console.log(response)
      if(response.exists === false){
        navigate(`/modal/validado/${id}`)
      } else if (response.exists === true){
        navigate(`/modal/validando/`)
      } 
  }


  const openModalValidado = () => {
    fetchValidarDatos(data.numeroDocumento)
    ;
  };


  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    const datos ={...data, [name]: value}
    setData( {...data, [name]: value})   
    // console.log(data) 

    // const isNombresComplete = nombres.trim() !== "";
    // const isApellidosComplete = apellidos.trim() !== "";
    // const isTipoDocumentoComplete = tipoDocumento.trim() !== "";
    // const isNumeroDocumentoComplete = numeroDocumento.trim() !== "";
    // Comprueba si todos los campos están completos
    const isFormComplete =
    Object.values(datos).length == 4 
    console.log(isFormComplete)
      // isNombresComplete && isApellidosComplete && isTipoDocumentoComplete && isNumeroDocumentoComplete;

    setIsFormComplete(isFormComplete);
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
            display="flex"
          >
            <Typography sx={styleLetra}>
              Iniciamos validando tus datos personales
            </Typography>
            <form style={{
            
               alignItems: "center",
               
            }}>
              <CssTextField
                fullWidth
                variant="outlined"
                label="Nombres"
                name="nombres"
                onChange={handleFieldChange}
              />
              <CssTextField
                fullWidth
                variant="outlined"
                label="Apellidos"
                name="apellidos"
                onChange={handleFieldChange}
              />
              <InputLabel id="demo-simple-select-label" sx={stylelabel}>
                Tipo de documento
              </InputLabel>
              <Select
                sx={styleAutocomplete}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Tipo de documento"
                name="tipoDocumento"
                value={data.tipoDocumento}
                onChange={handleFieldChange}
              >
                <MenuItem value="DNI">DNI</MenuItem>
                <MenuItem value="Carnet de Extranjeria">
                  Carnet de Extranjeria
                </MenuItem>
              </Select>

              <CssTextField
                fullWidth
                variant="outlined"
                label="Número de documento"
                name="numeroDocumento"
                type="number"
                inputProps={{
                  max: 12
                }}
                onChange={handleFieldChange}
              />
            </form>
            <CssButton
               disabled={!isFormComplete}
              onClick={openModalValidado}
              >
                Siguiente
              </CssButton>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
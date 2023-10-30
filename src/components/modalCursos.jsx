// eslint.config.js
import React, { useState } from "react";
import {
  Typography,
  Modal,
  Box,
  Button,
  MenuItem,
  Select,
  Grid,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";

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

const styleAutocomplete = {
  margin: "5px",
  width: "624px",
  height: "56px",
  borderRadius: "8px",
  display: "block",
  marginBottom: "1.5rem",
};

const styleSubtitle = {
  color: "#181818",
  width: "649px",
  fontFamily: "Barlow",
  fontWeight: "400",
  fontSize: "14px",
  alignItems: "center",
  margin: "1rem",
  textAlign: "center",
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

const CssButton2 = styled(Button)({
  backgroundColor: "#D9D8D8",
  color: "#545454",
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

export default function ModalCursos(props) {
  // const { open, onClose } = props; 
  const { open, onClose, onSave } = props;
  const [curso, setCurso] = useState("");
  const [nivel, setNivel] = useState("");


  const handleGuardarCurso = () => {
    const data = {
      curso,
      nivel,
    };
    onSave(data);
    onClose();
  };


  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            alignContent='center'
          >
            <Typography sx={styleLetra}>Cursos/Especializaciones</Typography>
            <Typography sx={styleSubtitle}>
              Ingresa los cursos/espeializaciones, puedes registrar hasta 10
              opciones. Ejm: excel, wordpress, marketing, redacción, publicidad
              en redes, etc.
            </Typography>
            <form>
              <CssTextField
                fullWidth
                variant='outlined'
                label='curso'
                name='curso'
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
              />
              <Select
                sx={styleAutocomplete}
                fullWidth
                disablePortal
                id="combo-box-demo"
                name="nivel"
                value={nivel}
                onChange={(e) => setNivel(e.target.value)}
              >
                <MenuItem value="basico">Básico</MenuItem>
                <MenuItem value="intermedio">Intermedio</MenuItem>
                <MenuItem value="avanzado">Avanzado</MenuItem>
              </Select>
              <div style={{ float: "right", marginLeft: 0, marginTop: "60px" }}>
                <CssButton2 variant='contained' type='button' onClick={onClose}>
                  Cancelar
                </CssButton2>
                <CssButton 
                variant="contained" 
                type="submit"
                onClick={handleGuardarCurso}
                >
                  Guardar
                </CssButton>
              </div>
            </form>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}


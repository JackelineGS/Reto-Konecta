import React, { useState } from "react";
import { Modal, Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "28px",
  transform: "translate(-50%, -50%)",
  width: 720,
  height: "Hug 492px",
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

const CssTextField2 = styled(TextField)({
  margin: "5px",
  marginBottom: "5rem",
  width: "302px",
  height: "56px",
  borderRadius: "8px",
  display: "block",
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

export default function ModalCrearExp(props) {
  const { open, onClose, onSave } = props;
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  const handleGuardar = () => {
    const data = {
      cargo,
      empresa,
      fechaInicio,
      fechaFin,
    };
    onSave(data);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          alignContent='center'
        >
          <Typography sx={styleLetra}>Experiencia</Typography>

          <form>
            <CssTextField
              fullWidth
              variant='outlined'
              label='Cargo'
              name='cargo'
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            />
            <CssTextField
              fullWidth
              variant='outlined'
              label='Empresa'
              name='empresa'
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <CssTextField2
                fullWidth
                variant='outlined'
                name='fechaInicio'
                type='date'
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
              />
              <CssTextField2
                fullWidth
                variant='outlined'
                name='fechaFin'
                type='date'
                value={fechaFin}
                onChange={(e) => setFechaFin(e.target.value)}
              />
            </div>
            <div style={{ float: "right", marginLeft: 0, marginTop: "60px" }}>
              <CssButton2 variant='contained' type='button' onClick={onClose}>
                Cancelar
              </CssButton2>
              <CssButton
                variant='contained'
                type='button'
                onClick={handleGuardar}
              >
                Guardar
              </CssButton>
            </div>
          </form>
        </Grid>
      </Box>
    </Modal>
  );
}

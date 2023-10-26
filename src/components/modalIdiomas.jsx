import * as React from "react";
import {
  Typography,
  Modal,
  Box,
  Button,
  Grid,
  TextField,
  Autocomplete,
} from "@mui/material";
import { styled } from "@mui/material/styles";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "28px",
  transform: "translate(-50%, -50%)",
  width: 720,
  height: "Hug 466px",
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
  fontFamily: "Barlow",
  fontWeight: "400",
  fontSize: "14px",
  alignItems: "left",
  margin: "1rem",
  textAling: "left",
  display: "flex",
};

const styleAutocomplete = {
  margin: "5px",
  width: "624px",
  height: "56px",
  borderRadius: "8px",
  display: "block",
  marginBottom: "1.5rem",
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

export default function ModalIdiomas(props) {
  const { open, onClose } = props;

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
            <Typography sx={styleLetra}>Idiomas</Typography>
            <Typography sx={styleSubtitle}>
              Ingrese el nivel de ingles
            </Typography>
            <form>
              <CssTextField
                fullWidth
                variant='outlined'
                label='Nombre de la institución'
                name='cargo'
              />
              <Autocomplete
                fullWidth
                disablePortal
                id='combo-box-demo'
                options={[
                  "Básico (A2)",
                  "Intermedio (B1)",
                  "Intermedio (B2)",
                  "Avanzado(C1)",
                  "Avanzado(C2)",
                ]}
                renderInput={(params) => (
                  <TextField {...params} label='Nivel' />
                )}
                sx={styleAutocomplete}
              />
              <div style={{ float: "right", marginLeft: 0, marginTop: "60px" }}>
                <CssButton2 variant='contained' type='submit'>
                  Cancelar
                </CssButton2>
                <CssButton variant='contained' type='submit'>
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

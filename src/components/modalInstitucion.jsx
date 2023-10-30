import { useState } from "react";
import {
  Typography,
  Modal,
  Box,
  Button,
  Grid,
  TextField,
  MenuItem,
  Select
} from "@mui/material";
import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "28px",
  transform: "translate(-50%, -50%)",
  width: 720,
  height: "Hug 538px",
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

const styleAutocomplete = {
  margin: "5px",
  width: "624px",
  height: "56px",
  borderRadius: "8px",
  display: "block",
  marginBottom: "1.5rem",
};

export default function ModalInstitucion(props) {
  const { open, onClose, onSave } = props;
  const [formacion, setFormacion] = useState("");
  const [nombrei, setInstitucion] = useState("");
  const [estado, setEstado] = useState("");
  
  
  const handleGuardarInstitucion = () => {
    const data = {
      formacion,
      nombrei,
      estado,
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
            direction="column"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            <Typography sx={styleLetra}>Institucion</Typography>
            <Typography sx={styleSubtitle}>
              Ingresa los datos de tu último grado de formación
            </Typography>
            <form>
              <Select
                sx={styleAutocomplete}
                fullWidth
                disablePortal
                id="combo-box-demo"
                name="formacion"
                value={formacion}
                onChange={(e) => setFormacion(e.target.value)}
              >
                <MenuItem value="secundaria">Secundaria</MenuItem>
                <MenuItem value="tecnica">Técnica</MenuItem>
                <MenuItem value="universitaria">Universitaria</MenuItem>
              </Select>
              <CssTextField
                fullWidth
                variant="outlined"
                label="Nombre de la institución"
                name="nombrei"
                value={nombrei}
                onChange={(e) => setInstitucion(e.target.value)}
              />
              <Select
                sx={styleAutocomplete}
                fullWidth
                disablePortal
                id="combo-box-demo"
                name="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <MenuItem value="finalizado">Finalizado</MenuItem>
                <MenuItem value="encurso">En curso</MenuItem>
                <MenuItem value="suspendido">Suspendido</MenuItem>
              </Select>
              <div style={{ float: "right", marginLeft: 0, marginTop: "60px" }}>
                <CssButton2 variant='contained' type='button' onClick={onClose}>
                  Cancelar
                </CssButton2>
                <CssButton 
                variant="contained" 
                type="submit"
                onClick={handleGuardarInstitucion}
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

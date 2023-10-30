import * as React from "react";
import { useState } from "react";
import {
  Typography,
  Modal,
  Box,
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
  Card,
  Container,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";

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

const styleCard = {
  margin: "5px",
  width: "624px",
  height: "56px",
  borderRadius: "8px",
  display: "block",
  marginBottom: "1.5rem",
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



export default function ModalHabilidades(props) {
  
  const { open, onClose, onChange, onSave } = props;
  const [skills, setskills] = useState([])
  console.log({skills})

  const handleSkillChange = (e) => {
    const index = skills.indexOf(e.target.value) 
    if(index === -1) {
      setskills([...skills, e.target.value])
    } else {
      setskills(skills.filter(skill => skill !== e.target.value))
    };
  };

  const handleClose = (e) => {
    onSave(skills);
    onClose();
  }
  
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
            <Box
              style={{
                overflowY: "scroll",
                height: "80vh",
                display: "block",
              }}
            >
              <Typography sx={styleLetra}>Habilidades</Typography>
              <Typography sx={styleSubtitle}>
                Selecciona las habilidades que mejor te identifican
              </Typography>
              <Container sx={styleCard}>

                <Box>
                  <Card>
                    <FormControl>
                      <FormLabel></FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          label="Comunicación Efectiva"
                          name="comunicacion"
                          value="comunicacion"
                          control={
                            <Checkbox
                              checked={skills.includes('comunicacion')}
                              onChange={handleSkillChange}
                            />
                          }
                        />
                        <FormControlLabel
                          label="Empatía"
                          name="empatia"
                          value="empatia"
                          control={
                            <Checkbox
                              checked={skills.includes('empatia')}
                              onChange={handleSkillChange}
                            />
                          }
                        />
                        <FormControlLabel
                          label="Escucha Activa"
                          name="escucha"
                          value="escucha"
                          control={
                            <Checkbox
                              checked={skills.includes('escucha')}
                              onChange={handleSkillChange}
                            />
                          }
                        />
                        <FormControlLabel
                          label="Negociación"
                          name="negociacion"
                          value="negociacion"
                          control={
                            <Checkbox
                              checked={skills.includes('negociacion')}
                              onChange={handleSkillChange}
                            />
                          }
                        />
                        <FormControlLabel
                          label="Actitud Positiva"
                          name="actitud"
                          value="actitud"
                          control={
                            <Checkbox
                              checked={skills.includes('actitud')}
                              onChange={handleSkillChange}
                            />
                          }
                        />
                         <FormControlLabel
                          label="Adaptabilidad"
                          name="adaptabilidad"
                          value="adaptabilidad"
                          control={
                            <Checkbox
                              checked={skills.includes('adaptabilidad')}
                              onChange={handleSkillChange}
                            />
                          }
                        />
                         <FormControlLabel
                          label="Iniciativa"
                          name="iniciativa"
                          value="iniciativa"
                          control={
                            <Checkbox
                              checked={skills.includes('iniciativa')}
                              onChange={handleSkillChange}
                            />
                          }
                        />
                         <FormControlLabel
                          label="Rapidez de respuesta"
                          name="rapidez"
                          value="rapidez"
                          control={
                            <Checkbox
                              checked={skills.includes('rapidez')}
                              onChange={handleSkillChange}
                            />
                          }
                        />
                         <FormControlLabel
                          label="Proactividad"
                          name="proactividad"
                          value="proactividad"
                          control={
                            <Checkbox
                              checked={skills.includes('proactividad')}
                              onChange={handleSkillChange}
                            />
                          }
                        />

                      </FormGroup>
                    </FormControl>
                  </Card>
                </Box>
                <div style={{ float: "right", marginLeft: 0, marginTop: "60px" }}>
                <CssButton2 variant='contained' type='button' onClick={onClose}>
                  Cancelar
                </CssButton2>
                <CssButton 
                variant="contained" 
                type="submit"
                onClick={handleClose}
                >
                  Guardar
                </CssButton>
              </div>
              </Container>
            </Box>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

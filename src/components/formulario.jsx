import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import { CustomizedSteppers } from "../components/stepper";
import ModalCrearExp from "../components/modalCrearExp";
import ModalInstitucion from "./modalInstitucion";
import ModalCursos from "../components/modalCursos";
import ModalHabilidades from "./modalHabilidades";
import ModalIdiomas from "./modalIdiomas";

const CssTextField = styled(TextField)({
  display: "block",
  margin: ".5rem 0",
  fontFamily: "Barlow",
  fontWeight: 300,
  fontSize: "16px",

  "& label.Mui-focused": {
    color: "#CE0F69",
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

const styleAñadir = {
  color: "#CE0F69",
  fontFamily: "Barlow",
  fontWeight: 600,
  fontSize: "13px",
  alignItems: "center",
  margin: "1rem",
  padding: 0,
};

const typoLetra = {
  color: "#6F7271",
  fontFamily: "Barlow",
  fontWeight: 700,
  fontSize: "12px",
  alignItems: "center",
  margin: "1rem",
};

const typoEncabezado = {
  color: "#181818",
  fontFamily: "Barlow",
  fontWeight: 700,
  fontSize: "18px",
  alignItems: "center",
  margin: "1rem",
  textAling: "left",
  display: "flex",
};

const arcodionStyle = {
  height: "46px",
  borderRadius: "8px",
  padding: "8px 24px 8px 24px",
  margin: "1rem",
  alignItems: "center",
};

export default function Formulario() {
  //Modales

  const [isModalExp, setIsModalExp] = useState(false);

  const handleOptionChange = (event) => {
    if (event.target.value === "Con experiencia") {
      setIsModalExp(true);
    } else {
      setIsModalExp(false);
    }
  };

  const [isModalInstitucion, setIsModalInstitucion] = useState(false);
  const [isModalCursos, setIsModalCursos] = useState(false);
  const [isModalHabilidades, setIsModalHabilidades] = useState(false);
  const [isModalIdiomas, setModalIdiomas] = useState(false);

  const openModal = (modalType) => {
    if (modalType === "isModalInstitucion") {
      setIsModalInstitucion(true);
    } else if (modalType === "isModalCursos") {
      setIsModalCursos(true);
    } else if (modalType === "isModalHabilidades") {
      setIsModalHabilidades(true);
    } else if (modalType === "isModalIdiomas") {
      setModalIdiomas(true);
    }
  };

  const closeModal = (modalType) => {
    if (modalType === "isModalInstitucion") {
      setIsModalInstitucion(false);
    } else if (modalType === "isModalCursos") {
      setIsModalCursos(false);
    } else if (modalType === "isModalHabilidades") {
      setIsModalHabilidades(false);
    } else if (modalType === "isModalIdiomas") {
      setModalIdiomas(false);
    }
  };
  // valores formulario

  /*  const handleGuardarClick = () => {
    console.log("Datos capturados:", datos);
  };
*/
  const [datos, setDatos] = useState({
    celular: "",
    correo: "",
    departamento: "",
    provincia: "",
    distrito: "",
    direccion: "",
  });
  console.log(datos);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const [experiencia, setExperiencia] = useState(null);

  const handleGuardarDatos = (data) => {
    setExperiencia(data);
    console.log(data);
    setIsModalExp(false);
  };

  return (
    <>
      <CustomizedSteppers />
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{
          margin: "2rem",
        }}
      >
        <Grid position='static' item xs={3}>
          <Paper
            style={{
              overflowY: "scroll",
              height: "80vh",
            }}
          >
            <List>
              <Card
                sx={{ mt: 3 }}
                style={{
                  backgroundColor: "#FFF",
                  padding: "1rem",
                  borderRadius: "24px",
                  width: "664px",
                  height: "334px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={typoEncabezado}>Datos personales</Typography>
                  <Button sx={styleAñadir}>Editar</Button>
                </div>
                <CardContent>
                  <form>
                    <CssTextField
                      fullWidth
                      variant='outlined'
                      label='Nombres'
                      name='nombres'
                    />
                    <CssTextField
                      fullWidth
                      variant='outlined'
                      label='Apellidos'
                      name='apellidos'
                    />
                    <Autocomplete
                      fullWidth
                      disablePortal
                      id='combo-box-demo'
                      options={["DNI", "Pasaporte"]}
                      renderInput={(params) => (
                        <TextField {...params} label='Tipo' />
                      )}
                    />

                    <CssTextField
                      fullWidth
                      variant='outlined'
                      label='N° documento'
                      name='documento'
                    />
                  </form>
                </CardContent>
              </Card>
              <Card
                sx={{ mt: 3 }}
                style={{
                  backgroundColor: "#FFF",
                  padding: "1rem",
                  borderRadius: "24px",
                  width: "664px",
                  height: "480px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={typoEncabezado}>Datos de contacto</Typography>
                  <Button sx={styleAñadir}>Editar</Button>
                </div>
                <CardContent>
                  <form>
                    <CssTextField
                      fullWidth
                      variant='outlined'
                      label='Numero de celular'
                      name='celular'
                      value={datos.celular}
                      onChange={handleInputChange}
                    />
                    <CssTextField
                      fullWidth
                      variant='outlined'
                      label='Correo'
                      name='correo'
                      value={datos.correo}
                      onChange={handleInputChange}
                    />
                    <CssTextField
                      fullWidth
                      variant='outlined'
                      label='Departamento'
                      name='departamento'
                      value={datos.departamento}
                      onChange={handleInputChange}
                    />
                    <CssTextField
                      fullWidth
                      variant='outlined'
                      label='Provincia'
                      name='provincia'
                      value={datos.provincia}
                      onChange={handleInputChange}
                    />
                    <CssTextField
                      fullWidth
                      variant='outlined'
                      label='Distrito'
                      name='distrito'
                      value={datos.distrito}
                      onChange={handleInputChange}
                    />

                    <CssTextField
                      fullWidth
                      variant='outlined'
                      label='Dirección'
                      name='direccion'
                      value={datos.direccion}
                      onChange={handleInputChange}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        gap: "10px",
                      }}
                    >
                      <button /*onClick={handleGuardarClick}*/>Guardar</button>
                      <button>Cancelar</button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              <Card
                sx={{ mt: 3 }}
                style={{
                  backgroundColor: "#FFF",
                  padding: "1rem",
                  borderRadius: "24px",
                  width: "664px",
                  height: "334px",
                }}
              >
                <Typography sx={typoEncabezado}>Experiencia Laboral</Typography>
                <CardContent>
                  <Accordion>
                    <AccordionSummary>
                      <FormControlLabel
                        value='Con experiencia'
                        control={
                          <Radio
                            checked={isModalExp}
                            onChange={handleOptionChange}
                            value='Con experiencia'
                          />
                        }
                        label='Con experiencia'
                      />
                    </AccordionSummary>
                  </Accordion>
                </CardContent>
                <CardContent>
                  <Accordion>
                    <FormControlLabel
                      value='Sin experiencia'
                      control={
                        <Radio
                          checked={!isModalExp}
                          onChange={handleOptionChange}
                          value='Sin experiencia'
                        />
                      }
                      label='Sin experiencia'
                    />
                  </Accordion>
                </CardContent>
              </Card>
              <Card
                sx={{ mt: 3, mb: 3 }}
                style={{
                  backgroundColor: "#FFF",
                  padding: "1rem",
                  borderRadius: "24px",
                  width: "664px",
                  height: "356px",
                }}
              >
                <Typography sx={typoEncabezado}>Estudios</Typography>
                <CardContent>
                  <ModalCrearExp
                    open={isModalExp}
                    onClose={() => setIsModalExp(false)}
                    onSave={handleGuardarDatos}
                  />
                  <form>
                    <Accordion fullWidth sx={arcodionStyle}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={typoLetra}> INSTITUCIÓN</Typography>
                        <Button
                          sx={styleAñadir}
                          onClick={() => openModal("isModalInstitucion")}
                        >
                          Añadir
                        </Button>
                        <ModalInstitucion
                          open={isModalInstitucion}
                          onClose={() => closeModal("isModalInstitucion")}
                        />
                      </div>
                    </Accordion>
                    <Accordion fullWidth sx={arcodionStyle}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={typoLetra}>
                          CURSOS / ESPECIALIZACIONES
                        </Typography>
                        <Button
                          sx={styleAñadir}
                          onClick={() => openModal("isModalCursos")}
                        >
                          Añadir
                        </Button>
                        <ModalCursos
                          open={isModalCursos}
                          onClose={() => closeModal("isModalCursos")}
                        />
                      </div>
                    </Accordion>

                    <Accordion fullWidth sx={arcodionStyle}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={typoLetra}>HABILIDADES</Typography>
                        <Button
                          sx={styleAñadir}
                          onClick={() => openModal("isModalHabilidades")}
                        >
                          Añadir
                        </Button>
                        <ModalHabilidades
                          open={isModalHabilidades}
                          onClose={() => closeModal("isModalHabilidades")}
                        />
                      </div>
                    </Accordion>
                    <Accordion fullWidth sx={arcodionStyle}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={typoLetra}>IDIOMAS</Typography>
                        <Button
                          sx={styleAñadir}
                          onClick={() => openModal("isModalIdiomas")}
                        >
                          Añadir
                        </Button>
                        <ModalIdiomas
                          open={isModalIdiomas}
                          onClose={() => closeModal("isModalIdiomas")}
                        />
                      </div>
                    </Accordion>
                  </form>
                </CardContent>
              </Card>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

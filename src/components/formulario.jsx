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
import ModalCrearExp from "../components/modalCrearExp";
import ModalInstitucion from "./modalInstitucion";
import ModalCursos from "../components/modalCursos";
import ModalHabilidades from "./modalHabilidades";
import ModalIdiomas from "./modalIdiomas";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

const CustomPaper = styled(Paper)(({ theme }) => ({
  width: "840px",
  overflowY: "scroll",
  height: "130vh",
  display: "flex",
  justifyContent: "center",
  borderRadius: "10px",

  "&::-webkit-scrollbar": {
    width: "10px",
    backgroundColor: "#white",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#B2B4B2",
    borderRadius: "10px",
  },
}));

const CssTextField = styled(TextField)({
  display: "block",
  margin: ".5rem 0",
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
  fontWeight: 600,
  fontSize: "13px",
  textAling: "center",
  margin: "1rem",
  padding: 0,
  textTransform: "none",
};

const typoLetra = {
  color: "#6F7271",
  fontWeight: 700,
  fontSize: "12px",
  textAling: "center",
};

const typoEncabezado = {
  color: "#181818",
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

const CssButton = styled(Button)({
  backgroundColor: "#CE0F69",
  color: "white",
  borderRadius: "8px",
  padding: "6px 16px",
  cursor: "pointer",
  margin: "5px",
  textTransform: "none",
  fontSize: "0.8rem",
  "&:hover": {
    backgroundColor: "#B2BAC2",
  },
  "&:disabled": {
    backgroundColor: "#D9D8D8",
    cursor: "default",
  },
});

const CssButton2 = styled(Button)({
  backgroundColor: "#ECECEC",
  color: "#545454",
  borderRadius: "8px",
  padding: "6px 16px",
  cursor: "pointer",
  margin: "5px",
  textTransform: "none",
  fontSize: "0.8rem",
  "&:hover": {
    backgroundColor: "#B2BAC2",
  },
  "&:disabled": {
    backgroundColor: "#ECECEC",
    cursor: "default",
  },
});

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
          <CustomPaper
            style={{
              width: "840px",
              overflowY: "scroll",
              height: "130vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <List>
              <Card
                sx={{ mt: 3 }}
                style={{
                  width: "600px",
                  backgroundColor: "#FFF",
                  padding: "1rem",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={typoEncabezado}>Datos personales</Typography>
                  <Button sx={styleAñadir} startIcon={<EditIcon />}>
                    Editar
                  </Button>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    gap: "10px",
                  }}
                >
                  <CssButton2 variant='contained' type='button'>
                    Cancelar
                  </CssButton2>
                  <CssButton variant='contained' type='button'>
                    Guardar
                  </CssButton>
                </div>
              </Card>
              <Card
                sx={{ mt: 3 }}
                style={{
                  width: "600px",
                  backgroundColor: "#FFF",
                  padding: "1rem",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={typoEncabezado}>Datos de contacto</Typography>
                  <Button sx={styleAñadir} startIcon={<EditIcon />}>
                    Editar
                  </Button>
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
                      <CssButton2>Cancelar</CssButton2>
                      <CssButton>Guardar</CssButton>
                    </div>
                  </form>
                </CardContent>
              </Card>
              <Card
                sx={{ mt: 3, mb: 3 }}
                style={{
                  width: "600px",
                  backgroundColor: "#FFF",
                  padding: "1rem",
                  borderRadius: "10px",
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
                        label={
                          <div>
                            <Typography
                              fontSize='15px'
                              fontWeight='bold'
                              color='#181818'
                            >
                              Con experiencia
                            </Typography>
                            <Typography fontSize='14px' color='#545454'>
                              Experiencia en otro rubro, call, etc.
                            </Typography>
                          </div>
                        }
                      />
                    </AccordionSummary>
                  </Accordion>
                </CardContent>
                <CardContent>
                  <Accordion>
                    <AccordionSummary>
                      <FormControlLabel
                        value='Sin experiencia'
                        control={
                          <Radio
                            checked={!isModalExp}
                            onChange={handleOptionChange}
                            value='Sin experiencia'
                          />
                        }
                        label={
                          <div>
                            <Typography
                              fontSize='15px'
                              fontWeight='bold'
                              color='#181818'
                            >
                              Sin experiencia
                            </Typography>
                            <Typography fontSize='14px' color='#545454'>
                              Egresados, estudiantes, etc.
                            </Typography>
                          </div>
                        }
                      />
                    </AccordionSummary>
                  </Accordion>
                </CardContent>
              </Card>

              <Card
                sx={{ mt: 3, mb: 3 }}
                style={{
                  width: "600px",
                  backgroundColor: "#FFF",
                  padding: "1rem",
                  borderRadius: "10px",
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
                        <div
                          style={{
                            width: "100%",
                            marginTop: "15px",
                          }}
                        >
                          <Typography sx={typoLetra}>INSTITUCIÓN</Typography>
                        </div>

                        <Button
                          sx={styleAñadir}
                          onClick={() => openModal("isModalInstitucion")}
                          startIcon={<AddIcon />}
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
                        <div
                          style={{
                            width: "100%",
                            marginTop: "15px",
                          }}
                        >
                          <Typography sx={typoLetra}>
                            CURSOS / ESPECIALIZACIONES
                          </Typography>
                        </div>
                        <Button
                          sx={styleAñadir}
                          onClick={() => openModal("isModalCursos")}
                          startIcon={<AddIcon />}
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
                        <div
                          style={{
                            width: "100%",
                            marginTop: "15px",
                          }}
                        >
                          <Typography sx={typoLetra}>HABILIDADES</Typography>{" "}
                        </div>
                        <Button
                          sx={styleAñadir}
                          onClick={() => openModal("isModalHabilidades")}
                          startIcon={<AddIcon />}
                        >
                          Añadir
                        </Button>
                        <ModalHabilidades
                          open={isModalHabilidades}
                          onClose={() => closeModal("isModalHabilidades")}
                          startIcon={<AddIcon />}
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
                        <div
                          style={{
                            width: "100%",
                            marginTop: "15px",
                          }}
                        >
                          <Typography sx={typoLetra}>IDIOMAS</Typography>
                        </div>
                        <Button
                          sx={styleAñadir}
                          onClick={() => openModal("isModalIdiomas")}
                          startIcon={<AddIcon />}
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
          </CustomPaper>
        </Grid>
      </Grid>
    </>
  );
}

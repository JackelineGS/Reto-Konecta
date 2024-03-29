import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
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
import { MenuItem } from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { WhiteButton } from "../components/whiteButton";

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
  width: "565px",
  height: "56px",
  display: "block",
};

export default function Formulario() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Datos generales
  const [datosgenerales, setData] = useState({
    nombres: "",
    apellidos: "",
    tipoDocumento: "",
    numeroDocumento: "",
  });

  const guardarDatos = (e) => {
    const { name, value } = e.target;
    const datos = { ...datosgenerales, [name]: value };
    setData({
      ...datosgenerales,
      [name]: value,
    });
    const datosPersonales = Object.values(datos);
    console.log(datosPersonales);
    console.log(datos);
  };

  // Datos de contacto
  const [datoscontacto, setDatos] = useState({
    celular: "",
    correo: "",
    departamento: "",
    provincia: "",
    distrito: "",
    direccion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const datos = { ...datoscontacto, [name]: value };
    setDatos({
      ...datoscontacto,
      [name]: value,
    });
    const datosContacto = Object.values(datos);
    console.log(datosContacto);
    console.log(datos);
  };

  // Experiencia

  const [isModalExp, setIsModalExp] = useState(false);

  const handleOptionChange = (event) => {
    if (event.target.value === "Con experiencia") {
      setIsModalExp(true);
    } else {
      setIsModalExp(false);
    }
  };
  const [experiencia, setExperiencia] = useState(null);
  const handleGuardarDatos = (data) => {
    setExperiencia(data);
    console.log(data, "Aqui los datos");
    setIsModalExp(false);
  };

  // Institucion

  const [isModalInstitucion, setIsModalInstitucion] = useState(false);
  const [institucion, setmodalInstitucion] = useState(null);
  const handleInstitucion = (data) => {
    setmodalInstitucion(data);
    console.log(data, "datos institucion");
    setIsModalInstitucion(false);
  };

  // Cursos
  const [isModalCursos, setIsModalCursos] = useState(false);
  const [cursos, setmodalCursos] = useState(null);
  const handleCursos = (data) => {
    setmodalCursos(data);
    console.log(data, "datos curso");
    setIsModalCursos(false);
  };

  const [isModalHabilidades, setIsModalHabilidades] = useState(false);
  const [habilidades, setmodalHabilidades] = useState([]);
  const handleHabilidades = (data) => {
    setmodalHabilidades(data);
    console.log(data, "datos de habilidades");
    setIsModalHabilidades(false);
  };

  // Modal Idiomas
  const [isModalIdiomas, setModalIdiomas] = useState(false);
  const [idiomas, setmodalIdiomas] = useState(null);
  const handleIdiomas = (data) => {
    setmodalIdiomas(data);
    console.log(data, "datos idioma");
    setModalIdiomas(false);
  };

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

  const data = {
    ...datosgenerales,
    ...datoscontacto,
    ...experiencia,
    institucion,
    cursos,
    habilidades,
    idiomas,
  };

  console.log(data);

  const openModalEvaluar = () => {
    navigate(`/modal/validando/${id}`);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{
          margin: "2rem",
        }}
      >
        <Grid position="static" item xs={3}>
          <CustomPaper
            style={{
              overflowY: "scroll",
              height: "80vh",
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
                  <Button sx={styleAñadir}>Editar</Button>
                </div>
                <CardContent>
                  <form>
                    <CssTextField
                      fullWidth
                      variant="outlined"
                      label="Nombres"
                      name="nombres"
                      value={datosgenerales.nombres}
                      onChange={guardarDatos}
                    />
                    <CssTextField
                      fullWidth
                      variant="outlined"
                      label="Apellidos"
                      name="apellidos"
                      value={datosgenerales.apellidos}
                      onChange={guardarDatos}
                    />
                    <Select
                      sx={styleAutocomplete}
                      id="combo-box-demo"
                      name="tipoDocumento"
                      value={datosgenerales.tipoDocumento}
                      onChange={guardarDatos}
                    >
                      <MenuItem value="DNI">DNI</MenuItem>
                      <MenuItem value="Carnet de Extranjeria">
                        Carnet de Extranjeria
                      </MenuItem>
                    </Select>
                    <CssTextField
                      fullWidth
                      variant="outlined"
                      label="N° documento"
                      name="numeroDocumento"
                      value={datosgenerales.numeroDocumento}
                      onChange={guardarDatos}
                    />
                    <div
                      style={{
                        float: "right",
                        marginLeft: 0,
                        marginTop: "10px",
                      }}
                    >
                      <CssButton2 variant="contained" type="button">
                        Cancelar
                      </CssButton2>
                      <CssButton
                        variant="contained"
                        type="button"
                        onClick={guardarDatos}
                      >
                        Guardar
                      </CssButton>
                    </div>
                  </form>
                </CardContent>
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
                  <Button sx={styleAñadir}>Editar</Button>
                </div>
                <CardContent>
                  <form>
                    <CssTextField
                      fullWidth
                      variant="outlined"
                      label="Numero de celular"
                      name="celular"
                      value={datoscontacto.celular}
                      onChange={handleInputChange}
                    />
                    <CssTextField
                      fullWidth
                      variant="outlined"
                      label="Correo"
                      name="correo"
                      value={datoscontacto.correo}
                      onChange={handleInputChange}
                    />
                    <CssTextField
                      fullWidth
                      variant="outlined"
                      label="Departamento"
                      name="departamento"
                      value={datoscontacto.departamento}
                      onChange={handleInputChange}
                    />
                    <CssTextField
                      fullWidth
                      variant="outlined"
                      label="Provincia"
                      name="provincia"
                      value={datoscontacto.provincia}
                      onChange={handleInputChange}
                    />
                    <CssTextField
                      fullWidth
                      variant="outlined"
                      label="Distrito"
                      name="distrito"
                      value={datoscontacto.distrito}
                      onChange={handleInputChange}
                    />

                    <CssTextField
                      fullWidth
                      variant="outlined"
                      label="Dirección"
                      name="direccion"
                      value={datoscontacto.direccion}
                      onChange={handleInputChange}
                    />
                    <div
                      style={{
                        float: "right",
                        marginLeft: 0,
                        marginTop: "10px",
                      }}
                    >
                      <CssButton2 variant="contained" type="button"> Cancelar </CssButton2>
                      <CssButton variant="contained" type="button" onClick={handleInputChange}>
                        Guardar
                      </CssButton>
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
                    <AccordionSummary style={{
                      border: '1px',
                      borderRadius: '8px'
                    }}>
                      <FormControlLabel
                        value="Con experiencia"
                        control={
                          <Radio
                            checked={isModalExp}
                            onChange={handleOptionChange}
                            value="Con experiencia"
                          />
                        } label={
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
                    <AccordionSummary 
                    style={{
                      border: '1px',
                      borderRadius: '8px'
                    }}
                    >
                    <FormControlLabel
                      value="Sin experiencia"
                      control={
                        <Radio
                          checked={!isModalExp}
                          onChange={handleOptionChange}
                          value="Sin experiencia"
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
                <CardContent>
                  <ModalCrearExp
                    open={isModalExp}
                    onClose={() => setIsModalExp(false)}
                    onSave={handleGuardarDatos}
                  />
                  <Typography sx={typoEncabezado}>Estudios</Typography>
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
                        }}>
                        <Typography sx={typoLetra}> INSTITUCIÓN</Typography>
                        </div>
                        <Button
                          sx={styleAñadir}
                          onClick={() => openModal("isModalInstitucion")}
                        >
                          Añadir
                        </Button>
                        <ModalInstitucion
                          open={isModalInstitucion}
                          onClose={() => closeModal("isModalInstitucion")}
                          onSave={handleInstitucion}
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
                        >
                          Añadir
                        </Button>
                        <ModalCursos
                          open={isModalCursos}
                          onClose={() => closeModal("isModalCursos")}
                          onSave={handleCursos}
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
                        <Typography sx={typoLetra}>HABILIDADES</Typography>
                        </div>
                        <Button
                          sx={styleAñadir}
                          onClick={() => openModal("isModalHabilidades")}
                        >
                          Añadir
                        </Button>
                        <ModalHabilidades
                          open={isModalHabilidades}
                          onClose={() => closeModal("isModalHabilidades")}
                          onSave={handleHabilidades}
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
                        >
                          Añadir
                        </Button>
                        <ModalIdiomas
                          open={isModalIdiomas}
                          onClose={() => closeModal("isModalIdiomas")}
                          onSave={handleIdiomas}
                        />
                      </div>
                    </Accordion>
                  </form>
                </CardContent>
              </Card>
            </List>
          </CustomPaper>
        </Grid>
        <div style={{
            width: '100%',
            height: '70px',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            display: 'flex',
          }}>
        <WhiteButton/>
        <Button
          variant="contained"
          style={{
            width: "200px",
            marginLeft: '10rem',
            textTransform: "none",
            color: "white",
            backgroundColor: isHovered ? "#ce0f6840" : "#CE0F69",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={openModalEvaluar}
        >
          Siguiente
        </Button>

        </div>
        
      </Grid>
    </>
  );
}

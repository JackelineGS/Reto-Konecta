import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Autocomplete,
  Paper,
  List,
  Radio,
  FormControlLabel,
  Button,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import { CustomizedSteppers } from "../components/stepper";

export default function Formulario() {
  const CssTextField = styled(TextField)({
    display: "block",
    margin: ".5rem 0",
    fontFamily: "Barlow",
    fontWeight: "300",
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
    fontWeight: "600",
    fontSize: "13px",
    alignItems: "center",
    margin: "1rem",
    padding: 0,
  };

  const typoLetra = {
    color: "#6F7271",
    fontFamily: "Barlow",
    fontWeight: "700",
    fontSize: "12px",
    alignItems: "center",
    margin: "1rem",
  };

  const typoEncabezado = {
    color: "#181818",
    fontFamily: "Barlow",
    fontWeight: "700",
    fontSize: "18px",
    alignItems: "center",
    margin: "1rem",
    textAling: "left",
    display: "flex",
  };

  const typoExperiencia = {
    color: "#181818",
    fontFamily: "Barlow",
    fontWeight: "600",
    fontSize: "14px",
    alignItems: "center",
    margin: "1rem",
    textAling: "left",
    display: "flex",
  };

  const arcodionStyle = {
    height: "Hug 46px",
    borderRadius: "8px",
    padding: "8px, 24px, 8px, 24px",
    margin: "1rem",
    alignItems: "center",
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
                {" "}
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
                      //options={top100Films}
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
                    />
                    <CssTextField
                      fullWidth
                      variant='outlined'
                      label='Correo'
                      name='apellidos'
                    />
                    <Autocomplete
                      fullWidth
                      disablePortal
                      id='combo-box-demo'
                      sx={{
                        margin: ".5rem 0",
                      }}
                      //options={top100Films}
                      renderInput={(params) => (
                        <TextField {...params} label='Departamento' />
                      )}
                    />
                    <Autocomplete
                      fullWidth
                      disablePortal
                      id='combo-box-demo'
                      sx={{
                        margin: ".5rem 0",
                      }}
                      //options={top100Films}
                      renderInput={(params) => (
                        <TextField {...params} label='Provincia' />
                      )}
                    />
                    <Autocomplete
                      fullWidth
                      disablePortal
                      id='combo-box-demo'
                      sx={{
                        margin: ".5rem 0",
                      }}
                      //options={top100Films}
                      renderInput={(params) => (
                        <TextField {...params} label='Distrito' />
                      )}
                    />
                    <CssTextField
                      fullWidth
                      variant='outlined'
                      label='Correo'
                      name='apellidos'
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
                  height: "334px",
                }}
              >
                <Typography sx={typoEncabezado}>Experiencia Laboral</Typography>
                <CardContent>
                  <Accordion>
                    <AccordionSummary
                      style={{
                        height: "88px",
                      }}
                    >
                      <FormControlLabel
                        value='female'
                        control={<Radio />}
                        label='Con experiencia'
                        sx={typoExperiencia}
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
                <CardContent>
                  <Accordion
                    style={{
                      height: "88px",
                    }}
                  >
                    <FormControlLabel
                      value='female'
                      control={<Radio />}
                      label='Sin experiencia'
                      sx={typoExperiencia}
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
                  <form>
                    <Accordion fullWidth sx={arcodionStyle}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={typoLetra}> INSTITUCIÓN</Typography>
                        <Button sx={styleAñadir}>Añadir</Button>
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
                          CURSOS /ESPECIALIZACIONES
                        </Typography>
                        <Button sx={styleAñadir}>Añadir</Button>
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
                        <Button sx={styleAñadir}>Añadir</Button>
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
                        <Button sx={styleAñadir}>Añadir</Button>
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

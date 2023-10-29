import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../components/backButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import { AccessTime, Room, Accessible } from "@mui/icons-material";

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "6px",
    margin:"20px",
    border: "1px solid #e0e0e0",
    width: "80%",
    height: "20%",
    borderRadius: "12px",
    backgroundColor: "rgba(0, 150, 143, 0.1)",
  },
  icon: {
    fontSize: "18px",
    marginRight: "4px",
    verticalAlign: "middle",
    color: "#CE0F69",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  textDias: {
    color:'#CE0F69',
    fontSize:'12px',
    textAlign:'center',
    margin:'10px',
  },
  time: {
    fontSize: "12px",
    backgroundColor: "white",
    borderRadius: "20px",
    textAlign: "center",
    width: "100px",
    padding: "5px",
    margin: "10px",
  }
};

const styles2 = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #e0e0e0",
    width: "1100PX",
    height: "650px",
    borderRadius: "20px",
    alingItems: 'center',
    padding: "30px",
    margin: "20px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
  },
  icon: {
    fontSize: "18px",
    marginRight: "4px",
    verticalAlign: "middle",
    color: "#CE0F69",
  },
  postularme:{
    width: "130px",
    height: "40px",
    borderRadius: "15px",
    textTransform: "none",
    color: "white",
    backgroundColor: "#CE0F69"
  },
  share: {
    color: "#CE0F69",
    backgroundColor: "#CE0F6924",
    height: "40px",
    borderRadius: "50px",
  },
  customCardContent: {
    flex: 2,
    overflowY: "auto",
    paddingRight: "20px",
    maxHeight: "50vh",
    "&::-webkit-scrollbar": {
      width: "10px",
      backgroundColor: "white",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#B2B4B2",
      borderRadius: "10px",
    },
  },
};

function OffersId() {
  const { id } = useParams();
  const navigate = useNavigate()


  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);

  const openModalBienvenida = () => {
    navigate(`/modal/bienvenida/${id}`, { state: { offersData: offers } });
  };
  

  const url = `https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/offers/${id}`;

  const fetchOffers = (url) => {
    setLoading(true); // Indicar que la carga está en curso

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setOffers(data.data);
        console.log(data.data);
      })
      .catch((error) => console.error("Error al obtener la oferta", error))
      .finally(() => setLoading(false)); // Finalizar la carga, independientemente del resultado
  };

  useEffect(() => {
    fetchOffers(url);
  }, [url]);

  return (
    <Fragment>
      <BackButton />
      {loading && <div>Cargando oferta...</div>}
      <CardContent backgroundColor="red" height="100%">
        <Grid container direction="row" spacing={1} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Card variant="outlined" style={styles.cardContainer}>
              <CardContent>
                <Typography fontSize="20px" fontWeight="bold">
                  {" "}
                  {offers.title}
                </Typography>
                <Typography fontSize="14px" marginTop="10px">
                  Atención al cliente
                </Typography>
                <div style={{ fontSize: "14px", marginTop: "10px" }}>
                  <LocationOnIcon style={styles.icon} />
                  Lima
                </div>
              </CardContent>
              <div flexDirection="column" alingItems="center" display="flex">
                <Typography style={styles.textDias}>Hace 4 días</Typography>
                <div style={styles.time}>Full time</div>
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Card variant="outlined" style={styles2.cardContainer}>
              <CardContent>
                <div style={styles2.textContainer}>
                  <Typography fontWeight="bold" color="#002855">
                    {offers.title}
                  </Typography>
                  <Typography fontSize='12px' color='#002855'>
                  Movistar Argentina
                  </Typography>
                  <Typography
                    fontSize="12px"
                    marginBottom="10px"
                    marginTop="20px"
                  >
                    <LocationOnIcon style={styles.icon} />
                    Lima
                  </Typography>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignSelf: "start",
                    gap: "20px",
                  }}
                >
                  <Button
                    onClick={openModalBienvenida}
                    variant="contained"
                    style={styles2.postularme}
                  >
                    Postularme
                  </Button>
                  <Button sx={styles2.share}
                  >
                    <ShareIcon sx={{ fontSize: 24, alignSelf: "center" }} />
                  </Button>
                </div>
              </CardContent>
              <CardContent sx={{ display: "flex", color: "#002855", gap: "15px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <AccessTime style={{ marginRight: "8px" }} />
                  <Typography sx={{ fontSize: "12px" }}>Full Time</Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Room style={{ marginRight: "8px" }} />
                  <Typography sx={{ fontSize: "12px" }}>Presencial</Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Accessible style={{ marginRight: "8px" }} />
                </div>
              </CardContent>
              <CardContent
        sx={{
          flex: 2,
          overflowY: "auto",
          paddingRight: "20px",
          maxHeight: "50vh",
          ...styles.customCardContent,
        }}
      >
        <Typography
          sx={{ fontSize: "12px", color: "#181818", marginBottom: "20px" }}
        >
          ¡Somos una de las mejores empresas dentro del TOP20 del Great Place to
          Work y aquí fomentamos y respetamos la igualdad de género, la
          inclusión y la diversidad! Para tu seguridad y tranquilidad te
          informamos que en Konecta estamos cumpliendo con los protocolos y
          normativas de bioseguridad para el cuidado, bienestar y prevención
          frente a la COVID 19. Nos encontramos en la búsqueda de Ejecutivos
          Atención de Seguros.
        </Typography>
        <Typography fontWeight='bold' color='#002855'>
          Te ofrecemos:
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li>
              Sueldo fijo + Incentivos Capacitación remunerada. Bono de 100
              soles a partir del 1er mes.
            </li>
            <li>Ingreso a planilla con todos los beneficios de ley.</li>
            <li>Pagos puntuales.</li>
            <li>Oportunidad de crecimiento profesional.</li>
            <li>
              Programa de Beneficios (préstamos personales, licencias, línea de
              carrera y mucho más).
            </li>
          </ul>
        </Typography>
        <Typography fontWeight='bold' color='#002855'>
          Requisitos:
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li>Mayores de 18 años.</li>
            <li>Secundaria completa.</li>
            <li>Manejo de PC a nivel usuario.</li>
            <li>
              Deseable experiencia mínima de 3 meses en atención al cliente en
              el rubro de banca, seguro o portabilidad.
            </li>
            <li>
              Disponibilidad para trabajar de manera presencial en nuestra sede
              Av. Nicolás de Piérola 589 - Cercado de Lima (Sede Crillon).
            </li>
            <li>
              Disponibilidad para trabajar de Lunes a Sábado de 9 am a 6 pm.
            </li>
            <li>DESCANSO DOMINGOS.</li>
          </ul>
        </Typography>
        <Typography fontWeight='bold' color='#002855'>
          Importante
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>
          Capacitación de forma virtual. Para la capacitacion de forma virtual
          necesitas contar como mínimo con pc
        </Typography>
      </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Fragment>
  );
}

export default OffersId;

import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Stack, 
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../components/backButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Container } from "postcss";

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "6px",
    margin:"20px",
    border: "1px solid #e0e0e0",
    width: "80%",
    height: "100%",
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
    width: "60%",
    height: "774px",
    borderRadius: "20px",
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
      <BackButton/>
      {loading && <div>Cargando oferta...</div>}
      <Card backgroundColor='red' height='100%' display='flex' flexDirection= "row">

            <div style={{width:'50%', backgroundColor:'red'}}>
              <Card variant="outlined" style={styles.cardContainer}>
                <CardContent>
                  <Typography fontSize='20px' fontWeight='bold'> {offers.title}</Typography>
                  <Typography fontSize='14px' marginTop='10px'>Atención al cliente</Typography>
                  <div style={{ fontSize: "14px", marginTop:'10px' }}>
                  <LocationOnIcon style={styles.icon} />
                  Lima
                </div>
                </CardContent>
                <div flexDirection= "column" alingItems = 'center' display='flex' >
                <Typography style={styles.textDias}>
                  Hace 4 días
                </Typography>
                <div style={styles.time}>
                    Full time
                </div>
                </div>
              </Card>
            </div>


            <div  style={{width:'50%', backgroundColor:'blue'}}> 
              <Card variant="outlined" style={styles2.cardContainer}>
                <CardContent>
                  <h2>Detalles de la oferta con ID: {offers.id}</h2>
                  <Typography variant="h6">TITLE: {offers.title}</Typography>
                  <Button onClick={openModalBienvenida}  variant="contained">Postularme</Button>
                </CardContent>
              </Card>
            </div>
          </Card>
    </Fragment>
  );
}

export default OffersId;

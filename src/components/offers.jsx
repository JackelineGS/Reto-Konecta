
import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessibleIcon from '@mui/icons-material/Accessible';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const styles = {
  cardContainer: {
    width: "70%",
    flexDirection: "column",
    alingItems: "center",
    alignContent: "center",
    display: "flex",
    backgroundColor: 'transparent',
    borderRadius: '12px'

  },
  cardAcordion: {
    width: "80%",
    flexDirection: "column",
    alingItems: "center",
    alignContent: "center",
    display: "flex",
    backgroundColor: 'transparent',
    borderRadius: '12px'
  },
  cardDetails :{
    display: "flex",
    flexDirection: "column",
    alingItems: "center",
  },
  bigCard: {
    display: "flex",
    width: '100%',
    flexDirection: "column",
    alingItems: 'center',
    padding: "6px",
  },
  icon: {
    fontSize: "20px",
    marginRight: "4px",
    verticalAlign: "middle",
    color: "#CE0F69",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  titulo: {
    display: "flex",
    color: "#002855",
    fontSize: "38px",
    alingItems: "center",
    justifyContent: 'center',
    marginBottom: '2rem',
    height: '48px'
  }, 
  cardTitle: {
    fontFamily: "Barlow",
    fontWeight: "700",
    color: '#615E9B',
    fontSize: '24px',
    height: '80px'

  },
  button: {
    backgroundColor: "#CE0F69",
    margin: "0.5rem",
    borderRadius: "16px"
  }, 
  divbutton: {
    height: "43px",
    marginBottom: "2rem",
    marginLeft: "7%"
  },
  firstGrid: {
    alingItems: 'center',
    display: 'flex',
   
  },
  secondGrid: {
    width: '100%',
    alingItems: 'center',
    justifyContent: 'center',
    marginTop: '2rem',
    marginBottom: '1rem',
    display: 'flex'
  },
  buttonConoce: {
      color: "white",
      background: "linear-gradient(to right, #0A9291, #615C9C)",
      height: "40px",
      borderRadius: "8px",
      padding: "11px",
      width:'80%',
      margin: '1.5rem',
      alingItems: 'center',
      justifyContent: 'center',
      display: 'flex'
  }
};


function Offers() {
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate()
  // const [loading, setLoading] = useState(true);

  const url =
    "https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/offers";

  const fetchOffers = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setOffers(data.data); // Almacenamos los datos de la API en el estado
        console.log(data.data);

        // setLoading(false); // Actualizamos el estado para indicar que la carga ha terminado
      })
      .catch((error) => console.error("Error al obtener las ofertas", error));
  };

  useEffect(() => {
    fetchOffers(url);
  }, []);


  return (
    <Card style={styles.bigCard}>
      <Typography style={styles.titulo}>Nuestras convocatorias</Typography>
      <div style={styles.divbutton}>
        <Button variant="contained" style={styles.button}>Todos</Button>
        <Button variant="contained" style={styles.button}>Atención al cliente</Button>
        <Button variant="contained" style={styles.button}>Ventas</Button>
        <Button variant="contained" style={styles.button}>Crosselling</Button>
        <Button variant="contained" style={styles.button}>Social Media</Button>
      </div>
    <Grid container spacing={2} style={styles.firstGrid}
    >
      {offers.map((offer, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} style={styles.secondGrid}  
        >
          
          <Card style={styles.cardAcordion}
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1a-content"
             id="panel1a-header"
          >
            <CardContent>
              <Typography variant="h6" style={styles.cardTitle}>{offer.title}</Typography>
              <Typography color='#CE0F69' fontSize='12px' textAlign='left' fontFamily= 'Barlow' fontWeight='500'>
              Hace 4 días
              </Typography>
              <div style={{flexDirection: "row", display: 'flex', height:'40px'}}>
              <div style={{ fontSize: "14px", margin: "10px" }}>
              <LocationOnIcon style={styles.icon} />
              Lima
              </div>

             <div style={{ fontSize: "14px", margin: "10px" }}>
              <AccessTimeIcon style={styles.icon} /> 
              Full Time
              </div>
              
              <div style={{ fontSize: "14px", margin: "10px" }}>
              < AccessibleIcon style={styles.icon} />
              </div>
              </div >
              </CardContent>
              <div style={{
                margin: '.5rem',
                padding: '26px',
                alingItems: 'center',
                alignContent: 'center',
                textAlign: 'justify', 
                display: 'flex',
                flexDirection: "column",
              }}> 
              <Typography sx={{ fontSize: "14px", color: "#181818", marginBottom: "20px" }}
                >{offer.content}
              </Typography>
                <Button onClick={() => navigate(`/ofertas/${offer.id}`)}  variant="contained" style={styles.buttonConoce} >Conoce más</Button>
                </div>
                </Card>
        </Grid>
      ))}
    </Grid>
    </Card>
  );
}

export default Offers;
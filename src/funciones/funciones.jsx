import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

  // if (loading) {
  //   return <div>Cargando ofertas...</div>;
  // }

  // NOTIFICACION DE EVALUACIONES


async function sendPostRequest() {

  const hostHackLab = 'https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/notifications/evaluations';

  const requestData = {
    recipientPhoneNumber: "+51925474137",
    user: "Sandy",
    job: "Asistente de comunicaciones",
    path: "GyQwuk-IGC-TEST-290923"
  };

  try {
    const response = await fetch(hostHackLab, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log('Solicitud POST exitosa');
  } catch (error) {
    console.error('Error:', error);
  }
}

sendPostRequest();




  return (
    <Grid container spacing={2}>
      {offers.map((offer, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">TITLE: {offer.title}</Typography>
              <Typography variant="h6">CATEGORY: {offer.category}</Typography>
              <Typography variant="h6">ID: {offer.id}</Typography>
              {/* <Link to={`/ofertas/${offer.id}`}> */}
                <Button onClick={() => navigate(`/ofertas/${offer.id}`)}  variant="contained">Postular</Button>
              {/* </Link> */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Offers;


import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
                <Button onClick={() => navigate(`/ofertas/${offer.id}`)}  variant="contained">CONOCE MÁS</Button>
              {/* </Link> */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Offers;

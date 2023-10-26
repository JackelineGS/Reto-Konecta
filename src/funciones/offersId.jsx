import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid
} from "@mui/material";

function OffersId() {
  const { id } = useParams();

  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);

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
      {loading && <div>Cargando oferta...</div>}
        <Grid container spacing={2} >
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <h2>Detalles de la oferta con ID: {offers.id}</h2>
                <Typography variant="h6">TITLE: {offers.title}</Typography>
                {/* Agrega aquí más detalles de la oferta si es necesario */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </Fragment>
  );
}

export default OffersId;

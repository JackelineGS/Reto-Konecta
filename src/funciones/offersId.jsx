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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {" "}
            <div >
              <Card variant="outlined">
                <CardContent>
                  <h2>Detalles de la oferta con ID: {offers.id}</h2>
                  <Typography variant="h6">TITLE: {offers.title}</Typography>
                </CardContent>
              </Card>
            </div>
            <div style={{width:"200px", height:"200px"}}> 
              <Card variant="outlined">
                <CardContent>
                  <h2>Detalles de la oferta con ID: {offers.id}</h2>
                  <Typography variant="h6">TITLE: {offers.title}</Typography>
                  <Button onClick={openModalBienvenida}  variant="contained">Postularme</Button>
                </CardContent>
              </Card>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default OffersId;

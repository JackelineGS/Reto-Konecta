import { useState, useEffect } from "react";
import { SimpleContainer } from "../components/simpleContainer";
import { CustomizedSteppers } from "../components/stepper";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Container
} from "@mui/material";
import { WhiteButton } from "../components/whiteButton";
import { PinkButton } from "./pink-button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

("Mostrar en la otra vista");
// import { SuccessAlert } from "../components/successAlert"; 'Modales a mostrar con javascript'
//import { WarningAlert } from "../components/warningAlert"; idem
//import { ErrorAlertCv } from "../components/errorAlertCV";
//import { ErrorAlert } from "../components/errorAlert";
//import { BasicModal } from "../components/modal";
//import ModalCursos from "../components/modalCursos";

export function ModalNoApto() {
  const [detailOffer, setDetailOffers] = useState([]);

  const getInfo = async () => {
    const response = await axios.get(
      `https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/offers`
    );
    setDetailOffers(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  console.log(detailOffer);
  // // console.log(detailOffer.title)

  const navigate = useNavigate();
  const { id } = useParams();

  const modalEvaluacion = () => {
    navigate(`/`);
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
      <CustomizedSteppers />
      <SimpleContainer>
        <SimpleContainer>
          <Box>
            {" "}
            <h6>
              Querido postulante, tu CV no se ajusta a la oferta que postulaste,
              pero tenemos otras propuestas ideales para ti
            </h6>
          </Box>
          {detailOffer.map((offer, index) => (
            <Grid item xs={4} key={index}>
              <Card variant="outlined">
                <CardContent onClick={() => navigate(`/ofertas/${offer.id}`)}>
                  <Typography variant="h8"> {offer.title}</Typography>
                  <br/>
                  <Typography variant="h8"> {offer.modality}</Typography>
                  <br/>
                  <Typography variant="h8">{offer.campus}</Typography>
                </CardContent >
              </Card>
            </Grid>
          ))}
        </SimpleContainer>
        <Button variant='contained'
        style={{
          width: "200px",
          textTransform: "none",
          color: "white",
          backgroundColor: isHovered ? "#ce0f6840" : "#CE0F69",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} onClick={modalEvaluacion}>Ver más Ofertas</Button>
      </SimpleContainer>
      <WhiteButton />
    </>
  );
}

import { useState, useEffect } from "react";
import { SimpleContainer } from "../components/simpleContainer";
import { CustomizedSteppers } from "../components/stepper";
import { Box, Button, Card, CardContent, Typography} from "@mui/material";
import { WhiteButton } from "../components/whiteButton";
import { PinkButton } from "./pink-button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

 'Mostrar en la otra vista'
// import { SuccessAlert } from "../components/successAlert"; 'Modales a mostrar con javascript'
//import { WarningAlert } from "../components/warningAlert"; idem
//import { ErrorAlertCv } from "../components/errorAlertCV";
//import { ErrorAlert } from "../components/errorAlert";
//import { BasicModal } from "../components/modal";
//import ModalCursos from "../components/modalCursos";

export function ModalApto() {
  const [detailOffer,setDetailOffers] = useState(null)

  const getInfo=async()=>{

    const response = await axios.get(`https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/offers/${id}`)
    setDetailOffers(response.data.data)
  }

  useEffect(()=>{
    getInfo()
  
  },[])

  // console.log(titulo)
  // // console.log(detailOffer.title)

  const navigate = useNavigate();
  const { id } = useParams();

  const modalEvaluacion = () => {
    navigate(`/modal/validando/${id}/apto/evaluaciones`)
  }

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const titulo = detailOffer ? detailOffer.title : "";
  const categoria = detailOffer ? detailOffer.campus : "";
  const descripcion = detailOffer ? detailOffer.modality : "";

  return (
    <>
      <CustomizedSteppers />
      <SimpleContainer>
        <h3>Querido postulante, tu CV es apto para la oferta que postulaste</h3>
      <Card variant="outlined">
            <CardContent>
              <Box>
              <Typography variant="h7"> {titulo}</Typography>
              </Box>
              <Box>
              <Typography variant="h8"> {categoria}</Typography>
              </Box>
              <Box>
              <Typography variant="h9"> {descripcion}</Typography>
              </Box>
            </CardContent>
          </Card>
          </SimpleContainer>
      <WhiteButton/>
      <Button variant='contained'
        style={{
          width: "200px",
          textTransform: "none",
          color: "white",
          backgroundColor: isHovered ? "#ce0f6840" : "#CE0F69",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} onClick={modalEvaluacion}>Siguiente</Button>
    </>
  );
}

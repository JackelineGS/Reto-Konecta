import { useState, useEffect } from "react";
import { SimpleContainer } from "../components/simpleContainer";
import { CustomizedSteppers } from "../components/stepper";
import { Box, Button, Card, CardContent, Typography, Container} from "@mui/material";
import { WhiteButton } from "../components/whiteButton";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { styled } from "@mui/material/styles";
import { Navbar } from "../components/navbar"


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


  const styles = {
    cardTitle: {
      fontFamily: "Barlow",
      fontWeight: "700",
      color: '#615E9B',
      fontSize: '24px',
      height: '80px'
    },
    subtitulo : {
      color: "#181818",
      width: '97px',
      fontFamily: "Barlow",
      fontWeight: "700",
      fontSize: "18px",
      alignItems:"center",
      margin: '1rem',
      textAling: "center", 
      justifyContent: 'center',
      display: "flex"
    },

    titulocard : {
      color: "#002855",
      width: '353',
      height: '24px',
      fontFamily: "Barlow",
      fontWeight: "500",
      fontSize: "16px",
      alignItems:"justified",
      margin: '1rem',
      textAling: "justified", 
      justifyContent: 'center',
      display: "flex"
    },

    continerStyle : {
      width: '1030px',
      height: '504px',
      borderRadius: '20px',
      padding: '35px',
      marginTop: '1rem',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column'
    },

    mensaje: {
      backgroundColor: "#919EAB1F",
      height: "56px",
      width: "898px",
      borderRadius: "16px",
      alignContent: 'center',
      alignItems: 'center',
      padding: '8px',
      display: 'flex'
    },
    divStyles: {
      marginTop: '2rem',
      width: '560px',
      height: '362px',
      alignContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    icon: {
      fontSize: "20px",
      marginRight: "4px",
      verticalAlign: "middle",
      color: "#CE0F69",
    },

  }
 
  
  const CssButton = styled(Button)({
    backgroundColor: "#CE0F69",
    color: "white",
    borderRadius: "8px",
    padding: "6px 16px",
    cursor: "pointer",
    margin: "5px",
  
    "&:hover": {
      backgroundColor: "#B2BAC2",
    },
  
    "&:disabled": {
      backgroundColor: "#D9D8D8",
      cursor: "default",
    },
  });


  return (
    <>
     <Navbar/>
      <CustomizedSteppers />
      <Container sx={styles.continerStyle}>
        <Card sx={styles.mensaje}>
          <Typography sx={styles.titulocard}>
          Querido postulante, tu CV es apto para la oferta que postulaste
          </Typography>
        </Card>
        <div sx={styles.divStyles}>
        <Typography sx={styles.subtitulo}>
          Oferta: 
        </Typography>
      <Card variant="outlined" style={{
        display: 'flex',
        width: '360px',
        height: '182px',
        borderRadius: '14px',
        padding: '10px',
      }}>
            <CardContent>
              <Box>
              <Typography sx={styles.cardTitle}> {titulo}</Typography>
              <Typography color='#CE0F69' fontSize='12px' textAlign='left'>
              Hace 4 días
              </Typography>
              <div style={{flexDirection: "row", display: 'flex', height:'44px', width:'340px'}}>
              <div style={{ fontSize: "14px", margin: "10px" }}>
              <LocationOnIcon style={styles.icon} />
              Lima
              </div>

             <div style={{ fontSize: "14px", margin: "10px" }}>
              <AccessTimeIcon style={styles.icon} /> 
              Full Time
              </div>
              </div >
              </Box>
            </CardContent>
          </Card>
          </div>
          </Container>
          <div style={{
            marginTop: '1rem',
            width: '100%',
            height: '48px',
            padding: '26px',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            display: 'flex',
            
          }} >
            <div style={{
            width: '60%',
            height: '48px',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            display: 'flex',
            
          }}>
          <WhiteButton/>
          <Button variant='contained'
          style={{
              width: "200px",
              textTransform: "none",
              color: "white",
              alignContent: 'center',
              alignItems: 'center',
              marginLeft: '12rem',
              backgroundColor: isHovered ? "#ce0f6840" : "#CE0F69",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
        onClick={modalEvaluacion}> Siguiente </Button>
            </div>
          </div>
    </>
  );
}

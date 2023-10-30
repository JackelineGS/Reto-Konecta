import React, { useEffect } from "react";
import { SimpleContainer } from "../components/simpleContainer";
import { CustomizedSteppers } from "../components/stepper";
import { Box, Button, Card, CardContent, Typography, ListItem, Container} from "@mui/material";
import { Navbar } from "../components/navbar"
import { BackButton } from "./backButton";
("Mostrar en la otra vista");
// import { SuccessAlert } from "../components/successAlert"; 'Modales a mostrar con javascript'
//import { WarningAlert } from "../components/warningAlert"; idem
//import { ErrorAlertCv } from "../components/errorAlertCV";
//import { ErrorAlert } from "../components/errorAlert";
//import { BasicModal } from "../components/modal";
//import ModalCursos from "../components/modalCursos";

export function ModalEvaluaciones() {


  //Mensaje  // SOLICITUD POST BIENVENIDO
  async function sendWelcomeNotification() {
    const host = 'https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/notifications/evaluations';
  
    const data = {
      recipientPhoneNumber: "+51925474137",
     user: "Postulante",
     job: "Asistente de comunicaciones",
     path: "GyQwuk-IGC-TEST-290923"
      };
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    try {
      const response = await fetch(host, requestOptions);
      console.log(response)
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      console.log('Solicitud exitosa');
    } catch (error) {
      console.error('Error:', error);
    }
  }

 useEffect(() => {
  sendWelcomeNotification()
}, []);

const styles ={
  cont : {
    marginTop: '2rem',
    width: '1030px',
    height: '500px',
    alignContent: 'center',
    borderRadius: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: 'white'
  },
  bigBox: {
    marginTop: '1rem',
    width: '560px',
  },
  evaluar: {
    width: '112px',
    height: '28px',
    fontFamily: 'Barlow',
    fontSize:'18px',
    fontWeight: '700',
    margin: '1rem',
    color: '#545454'
  },
  contenido: {
    margin: '.3rem',
    fontFamily: 'Barlow',
    fontWeight: '500',
    fontSize: '16px'
  },
  contenidoList: {
    fontFamily: 'Barlow',
    fontWeight: '500',
    fontSize: '16px'
  }
}


  return (
    <>
     <Navbar/>
     <BackButton />
      <CustomizedSteppers />
      <Container  sx={styles.cont}
      >
        <Box sx={styles.bigBox}>
          <Typography sx={styles.evaluar}> 
            Evaluaciones
          </Typography>
          
          <Typography sx={styles.contenido}>
            
            Como parte del proceso <strong style={{ color: "#615E9B" }}>Asesor de ATC Movistar Argentina</strong> de la
            empresa Konecta Perú, que inicia el 02/10/2023 18:57, te invitamos a
            rendir las evaluaciones del puesto, por favor da click en el
            siguiente enlace: <br/>
            <a
        href="https://candidato.evaluardev.com/GyQwuk-IGC-TEST-290923#!/signin "
        sx={{
          color: "blue",
          textDecoration: "underline",
        }}
      >
        https://candidato.evaluardev.com/GyQwuk-IGC-TEST-290923#!/signin
      </a>
        
        <Typography sx={styles.contenido}>
        También recibirás tus evaluaciones via correo y desde nuestro número de whataspp +51 999999999.
        </Typography>
           
          </Typography>
          <div>
      <Typography
      style={{
        width: '112px',
        height: '28px',
        fontFamily: 'Barlow',
        fontSize:'18px',
        fontWeight: '700',
        margin: '1rem',
        color: '#545454'
      }}
      >Recomendaciones</Typography>
      <ul>
        <ListItem>
          <Typography sx={styles.contenidoList}>
            - Podrás ingresar y resolver tus prueba con solo tu DNI.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography sx={styles.contenidoList}>
            - Tiempo en resolución : 24 horas
          </Typography>
        </ListItem>
        <ListItem>
          <Typography sx={styles.contenidoList}>
            - Si tienes inconvenientes en abrir el enlace podrás comunicarte al +51 999999999
          </Typography>
        </ListItem>
        <ListItem>
          <Typography sx={styles.contenidoList}>
            - Recuerda terminar tus evaluaciones.
          </Typography>
        </ListItem>
      </ul>
    </div>
          </Box>
      </Container>
    </>
  );
}

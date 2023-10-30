import React, { useEffect } from "react";
import { SimpleContainer } from "../components/simpleContainer";
import { CustomizedSteppers } from "../components/stepper";
import { Box, Button, Card, CardContent, Typography} from "@mui/material";
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
      user: "Sandy",
      trainingDate: "19/09",
      trainingHour: "13:10 pm",
      trainer: "Jackeline García",
      sede: "Av. República de Panamá 4603-4501, Lima 15047"
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
  window.addEventListener("load", sendWelcomeNotification)
 return () => {
  window.removeEventListener("load", sendWelcomeNotification);
};
}, []);


  return (
    <>
      <CustomizedSteppers />
      <SimpleContainer  >
        <Box>
          <Typography variant="h7"> Evaluaciones</Typography>
          <br />
          <br />
          <Typography variant="h7">
            
            Como parte del proceso Asesor de ATC Movistar Argentina de la
            empresa Konecta Perú, que inicia el 02/10/2023 18:57, te invitamos a
            rendir las evaluaciones del puesto, por favor da click en el
            siguiente enlace: <br/>
            https://candidato.evaluar.com/signup/515380url=process%2Fc1167b9c-638e-4990-8613-26952b818a10/detail
            También recibirás tus evaluaciones via correo y desde nuestro número
            de whataspp +51 999999999.
          </Typography>
          <br />
          <br />
          <Typography variant="h7">
            Recomendaciones: Podrás ingresar y resolver tus prueba con solo tu
            DNI. Tiempo en resolución : 24 horas . Si tienes inconvenientes en
            abrir el enlace podrás comunicarte al +51 999999999 Recuerda
            terminar tus evaluaciones.
          </Typography>
          </Box>
      </SimpleContainer>
    </>
  );
}

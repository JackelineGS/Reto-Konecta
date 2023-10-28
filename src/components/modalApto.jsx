import { useState } from "react";
import { SimpleContainer } from "../components/simpleContainer";
import { CustomizedSteppers } from "../components/stepper";
import { Button } from "@mui/material";
import { WhiteButton } from "../components/whiteButton";
import { PinkButton } from "./pink-button";
 'Mostrar en la otra vista'
// import { SuccessAlert } from "../components/successAlert"; 'Modales a mostrar con javascript'
//import { WarningAlert } from "../components/warningAlert"; idem
//import { ErrorAlertCv } from "../components/errorAlertCV";
//import { ErrorAlert } from "../components/errorAlert";
//import { BasicModal } from "../components/modal";
//import ModalCursos from "../components/modalCursos";

export function ModalApto() {
  return (
    <>
      <CustomizedSteppers />
      <SimpleContainer>
        <h1>eres apto</h1>
      </SimpleContainer>
      <WhiteButton/>
      <PinkButton/>
    </>
  );
}

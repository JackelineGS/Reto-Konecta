import Formulario from "../components/formulario";
import { CustomizedSteppers } from "../components/stepper";
import { WhiteButton } from "../components/whiteButton";
import { PinkButton } from "../components/pink-button";
import Grid from "@mui/material/Grid";
import { Navbar } from "../components/navbar"
import { BackButton } from "../components/backButton";

export function FormularioCv() {
  return (
    <>
     <Navbar/>
     <BackButton/>
      <CustomizedSteppers />
      <Formulario />
    </>
  );
}

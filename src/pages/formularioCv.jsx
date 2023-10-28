import Formulario from "../components/formulario";
import { CustomizedSteppers } from "../components/stepper";
import { WhiteButton } from "../components/whiteButton";
import { PinkButton } from "../components/pink-button";
import Grid from "@mui/material/Grid";

export function FormularioCv() {
  return (
    <>
      <CustomizedSteppers />
      <Formulario />
      <Grid
        container
        width='100%'
        direction='row'
        justifyContent='center'
        gap='440px'
        style={{
          margin: "2rem",
        }}
      >
        <WhiteButton />
        <PinkButton />
      </Grid>
    </>
  );
}

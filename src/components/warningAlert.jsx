import * as React from "react";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const CustomAlert = styled(Alert)({
  background: "#FFF7CD",
  color: "#7A4F01",
  maxWidth: "700px",
  margin: "0 auto",
});

export function WarningAlert() {
  return (
    <CustomAlert onClose={() => {}} severity='warning'>
      <Typography variant='body1' sx={{ fontWeight: "bold" }}>
        CV incompleto
      </Typography>
      <Typography variant='body2'>
        Faltan datos: contacto, experiencia y estudios.
      </Typography>
    </CustomAlert>
  );
}

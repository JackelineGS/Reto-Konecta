import * as React from "react";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const CustomAlert = styled(Alert)({
  background: "#E9FCD4",
  color: "#08660D",
  maxWidth: "700px",
  margin: "0 auto",
});

export function SuccessAlert() {
  return (
    <CustomAlert onClose={() => {}} severity='success'>
      <Typography variant='body1' sx={{ fontWeight: "bold" }}>
        Carga de CV exitoso
      </Typography>
      <Typography variant='body2'>Formato permitido</Typography>
    </CustomAlert>
  );
}

//<Alert severity='error'>This is an error alert — check it out!</Alert>;

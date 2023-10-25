import * as React from "react";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const CustomAlert = styled(Alert)({
  background: "#FFE7D9",
  color: "#7A0C2E",
  maxWidth: "700px",
  margin: "0 auto",
});

export function ErrorAlert() {
  return (
    <CustomAlert onClose={() => {}} severity='error'>
      <Typography variant='body1' sx={{ fontWeight: "bold" }}>
        Error de servidor
      </Typography>
      <Typography variant='body2'>
        Se presentó inconveniente, inténtalo nuevamente
      </Typography>
    </CustomAlert>
  );
}

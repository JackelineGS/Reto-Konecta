import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export function CreateCvCard() {
  const cardStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(1, 153, 145, 0.041)",
    padding: "20px",
    width: "230px",
    height: "260px",
  };

  const labelStyles = {
    cursor: "pointer",
  };

  return (
    <Card style={cardStyles}>
      <label htmlFor='file-upload' style={labelStyles}>
        <Typography variant='h5' component='div' textAlign='center'>
          Crear mi CV
        </Typography>
        <Typography variant='body2' color='text.secondary' textAlign='center'>
          Podrás crearlo rápidamente.
        </Typography>
      </label>
      <input type='file' id='file-upload' style={{ display: "none" }} />
    </Card>
  );
}

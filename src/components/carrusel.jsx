import React from "react";
import { Paper } from "@mui/material";
import carrusel1 from "../assets/img/carrusel1.png";
/* import { color } from "@mui/system"; */

const Carrusel = () => {
  const imagen = [
    {
      img: carrusel1
    },
  ];

  return (
    <Paper style={{display: "flex" , backgroundColor: '#002855'}}>
      <div style={{ overflow: "hidden", margin: "0 auto"}}>
        <img
          src={carrusel1}
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </Paper>
  );
};

export default Carrusel;

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import carrusel1 from "../assets/carrusel1.png";

export default function Carrusel(props) {
  const items = [
    {
      name: "",
      description: "Probablemente lo más aleatorio que hayas visto nunca",
      img: carrusel1,
    },
    {
      name: "Nombre Aleatorio #2",
      description: "¡Hola Mundo!",
    },
  ];

  return (
    <Carousel navButtonsAlwaysVisible>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      {props.item.img && <img src={props.item.img} width={200} height={200} />}
      <Button className='CheckButton'>¡Míralo!</Button>
    </Paper>
  );
}

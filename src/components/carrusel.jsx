import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import carrusel1 from "../assets/img/carrusel1.png";


export default function Carrusel(props) {
  const items = [
    {
      description: "",
      img: carrusel1
    },
    {
      description: "",
      img: carrusel1
    },
  ];

  return (
    <Carousel >
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
      {props.item.img && <img src={props.item.img} />}
      
    </Paper>
  );
}
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import carrusel1 from "../assets/carrusel1.png";

export default function Carrusel(props) {
  const items = [
    {
      name: "",
      description: "",
      img: carrusel1,
    },
    {
      name: "",
      description: "",
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
    </Paper>
  );
}

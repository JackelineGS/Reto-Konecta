import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "6px",
    border: "1px solid #e0e0e0",
    width: "290px",
    height: "120px",
    borderRadius: "12px",
    backgroundColor: "#00968F1A",
  },
  icon: {
    fontSize: "18px",
    marginRight: "4px",
    verticalAlign: "middle",
    color: "#CE0F69",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
};

export function OfferCardBlue() {
  return (
    <Card style={styles.cardContainer}>
      <CardContent>
        <Link to='/AGREGAR NUESTRA RUTA!!' style={styles.link}>
          <Typography fontWeight='bold'>Asesor de Dinners</Typography>
        </Link>
        <Typography fontSize='12px'>Atención al Cliente</Typography>
        <div style={{ fontSize: "12px", marginTop: "10px" }}>
          <LocationOnIcon style={styles.icon} />
          Cercado de Lima
        </div>
      </CardContent>
      <CardContent>
        <Typography color='#CE0F69' fontSize='12px' textAlign='center'>
          Hace 4 días
        </Typography>
        <div
          style={{
            fontSize: "12px",
            backgroundColor: "white",
            borderRadius: "20px",
            textAlign: "center",
            width: "100px",
            padding: "5px",
            marginTop: "10px",
          }}
        >
          Full time
        </div>
      </CardContent>
    </Card>
  );
}

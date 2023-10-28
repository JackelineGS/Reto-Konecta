import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { AccessTime, Room, Accessible } from "@mui/icons-material";

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "6px",
    border: "1px solid #e0e0e0",
    width: "800px",
    height: "580px",
    borderRadius: "12px",
    padding: "30px",
    margin: "20px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
  },
  icon: {
    fontSize: "18px",
    marginRight: "4px",
    verticalAlign: "middle",
    color: "#CE0F69",
  },
  customCardContent: {
    flex: 2,
    overflowY: "auto",
    paddingRight: "20px",
    maxHeight: "50vh",
    "&::-webkit-scrollbar": {
      width: "10px",
      backgroundColor: "white",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#B2B4B2",
      borderRadius: "10px",
    },
  },
};

export function OfferDetails() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card style={styles.cardContainer}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={styles.textContainer}>
          <Typography fontWeight='bold' color='#002855'>
            Asesor ATC
          </Typography>
          <Typography fontSize='12px' color='#002855'>
            Movistar Argentina
          </Typography>
          <Typography fontSize='12px' marginBottom='10px' marginTop='20px'>
            <LocationOnIcon style={styles.icon} />
            Cercado de Lima
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignSelf: "start",
            gap: "20px",
          }}
        >
          <Button
            variant='contained'
            style={{
              width: "130px",
              height: "40px",
              borderRadius: "15px",
              textTransform: "none",
              color: "white",
              backgroundColor: isHovered ? "#ce0f6840" : "#CE0F69",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Postularme
          </Button>
          <Button
            sx={{
              color: "#CE0F69",
              backgroundColor: "#CE0F6924",
              height: "40px",
              borderRadius: "50px",
            }}
          >
            <ShareIcon sx={{ fontSize: 24, alignSelf: "center" }} />
          </Button>
        </div>
      </CardContent>
      <CardContent sx={{ display: "flex", color: "#002855", gap: "15px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AccessTime style={{ marginRight: "8px" }} />
          <Typography sx={{ fontSize: "12px" }}>Full Time</Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Room style={{ marginRight: "8px" }} />
          <Typography sx={{ fontSize: "12px" }}>Presencial</Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Accessible style={{ marginRight: "8px" }} />
        </div>
      </CardContent>
      <CardContent
        sx={{
          flex: 2,
          overflowY: "auto",
          paddingRight: "20px",
          maxHeight: "50vh",
          ...styles.customCardContent,
        }}
      >
        <Typography
          sx={{ fontSize: "12px", color: "#181818", marginBottom: "20px" }}
        >
          ¡Somos una de las mejores empresas dentro del TOP20 del Great Place to
          Work y aquí fomentamos y respetamos la igualdad de género, la
          inclusión y la diversidad! Para tu seguridad y tranquilidad te
          informamos que en Konecta estamos cumpliendo con los protocolos y
          normativas de bioseguridad para el cuidado, bienestar y prevención
          frente a la COVID 19. Nos encontramos en la búsqueda de Ejecutivos
          Atención de Seguros.
        </Typography>
        <Typography fontWeight='bold' color='#002855'>
          Te ofrecemos:
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li>
              Sueldo fijo + Incentivos Capacitación remunerada. Bono de 100
              soles a partir del 1er mes.
            </li>
            <li>Ingreso a planilla con todos los beneficios de ley.</li>
            <li>Pagos puntuales.</li>
            <li>Oportunidad de crecimiento profesional.</li>
            <li>
              Programa de Beneficios (préstamos personales, licencias, línea de
              carrera y mucho más).
            </li>
          </ul>
        </Typography>
        <Typography fontWeight='bold' color='#002855'>
          Requisitos:
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li>Mayores de 18 años.</li>
            <li>Secundaria completa.</li>
            <li>Manejo de PC a nivel usuario.</li>
            <li>
              Deseable experiencia mínima de 3 meses en atención al cliente en
              el rubro de banca, seguro o portabilidad.
            </li>
            <li>
              Disponibilidad para trabajar de manera presencial en nuestra sede
              Av. Nicolás de Piérola 589 - Cercado de Lima (Sede Crillon).
            </li>
            <li>
              Disponibilidad para trabajar de Lunes a Sábado de 9 am a 6 pm.
            </li>
            <li>DESCANSO DOMINGOS.</li>
          </ul>
        </Typography>
        <Typography fontWeight='bold' color='#002855'>
          Importante
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>
          Capacitación de forma virtual. Para la capacitacion de forma virtual
          necesitas contar como mínimo con pc
        </Typography>
      </CardContent>
    </Card>
  );
}



import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ConvocatoriaCard = ({ titulo, descripcion }) => {
  return (
    <Card sx={{width:180, margin:2}} >
      <CardContent>
        <Typography variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Conoce más
        </Button>
      </CardActions>
    </Card>
  );
};

const convocatorias = [
    {
      titulo: "Convocatoria 1",
      descripcion: "Descripción de la convocatoria 1",
    },
    {
      titulo: "Convocatoria 2",
      descripcion: "Descripción de la convocatoria 2",
    },
    // Agrega más convocatorias según sea necesario
  ];

  
const Ofertas = () => {
  return (
    <Box display={'flex'}>
      {convocatorias.map((convocatoria, index) => (
        <ConvocatoriaCard
          key={index}
          titulo={convocatoria.titulo}
          descripcion={convocatoria.descripcion}
        />
      ))}
    </Box>
  );
};

export default Ofertas;

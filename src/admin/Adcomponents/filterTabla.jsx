import { useState } from "react";
import {
  Box,
  TextField,
  Button,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const Header = () => {
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  const handleFechaInicioChange = (event) => {
    setFechaInicio(event.target.value);
  };

  const handleFechaFinChange = (event) => {
    setFechaFin(event.target.value);
  };

  const handleBuscar = () => {
    const filtro = {
        fechaInicio,
        fechaFin,
  }
};

  const boxStyle = {
    margin: '1rem',
    direction: 'row',
    display: 'flex',
  }

  const boxinput = {
    margin: '1rem',
    direction: 'row',
  }

  const CssButton = styled(Button)({
    backgroundColor: "#002855",
    color: "white",
    borderRadius: "8px",
    padding: "6px 16px",
    cursor: "pointer",
    margin: "1rem",
    height: "40px",
    display: "flex",
    alignItems: 'center',
  
    "&:hover": {
      backgroundColor: "#B2BAC2",
    },
  
    "&:disabled": {
      backgroundColor: "#D9D8D8",
      cursor: "default",
    },
  });
  

  return (
    <Box sx={boxStyle}>
      <Box sx={ boxStyle }>
        <TextField sx={boxinput}
          //label="Fecha inicio"
          type="date"
          value={fechaInicio}
          onChange={handleFechaInicioChange}
        />
        <TextField sx={boxinput}
          //label="Fecha fin"
          type="date"
          value={fechaFin}
          onChange={handleFechaFinChange}
        />
      </Box>
      <CssButton 
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleBuscar}
      >
        Buscar
      </CssButton>
    </Box>
  );
};

export default Header;


import { useState } from "react";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Search } from "@mui/icons-material";

const Header = () => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [busqueda, setBusqueda] = useState("");

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
    };
  };

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const boxStyle = {
    margin: "30px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
  };

  const inputStyle = {
    width: "180px",
    padding: 0,
    minHeight: "30px",
    "& input": {
      cursor: "pointer",
    },
    "& label.Mui-focused": {
      color: "#919EAB",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#919EAB",
      },
      "& input:focus fieldset": {
        borderColor: "none",
      },
    },
  };

  const CssButton = styled(Button)({
    backgroundColor: "#002855",
    color: "white",
    borderRadius: "8px",
    padding: "10px",
    cursor: "pointer",
    height: "40px",
    display: "flex",
    alignSelf: "center",

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
      <TextField
        sx={inputStyle}
        type='date'
        variant='outlined'
        label='F.Inicio'
        value={fechaInicio}
        onChange={handleFechaInicioChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        sx={inputStyle}
        type='date'
        variant='outlined'
        label='F.Fin'
        value={fechaFin}
        onChange={handleFechaFinChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <CssButton
        type='submit'
        variant='contained'
        color='primary'
        onClick={handleBuscar}
        startIcon={<Search />}
      >
        Buscar
      </CssButton>
      <TextField
        sx={{
          width: "400px",
          padding: 0,
        }}
        type='text'
        variant='outlined'
        placeholder='Buscar por documentos'
        value={busqueda}
        onChange={handleBusquedaChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Header;

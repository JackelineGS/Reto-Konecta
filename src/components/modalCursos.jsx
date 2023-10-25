import * as React from 'react';
import { Typography, Modal, Box, Button, Grid, TextField, Autocomplete } from '@mui/material'
import { styled } from '@mui/material/styles';

const style = {
  position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: "28px",
    transform: 'translate(-50%, -50%)',
    width: 720,
    height: 'Hug 480px',
    backgroundColor: '#FFFFFF',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: 'flex'
};

const styleLetra = {
  color: "#CE0F69",
  margin: '24px',
  fontFamily: "Barlow",
  fontWeight: "600",
  fontSize: "20px",
  borde: 'none',
  justifyContent: "center",
  alignItems:"center",
  display: 'flex'
}

const CssTextField = styled(TextField)({
  margin: "5px",
  width: '624px',
  height: "56px",
  borderRadius: "8px",
  display: "block",
  marginBottom: '1.5rem',

  '& label.Mui-focused': {
    color: '#CE0F69',
    borderRadius: "8px",
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#D9D8D8',
    },
    '&:hover fieldset': {
      borderColor: '#ECECEC',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#CE0F69',
    },
  },
});

const styleAutocomplete = {
  margin: "5px",
  width: '624px',
  height: "56px",
  borderRadius: "8px",
  display: "block",
  marginBottom: '1.5rem',
}

const styleSubtitle = {
  color: "#181818",
  width: '649px',
      fontFamily: "Barlow",
      fontWeight: "400",
      fontSize: "14px",
      alignItems:"center",
      margin: '1rem',
      textAling: "center", 
      justifyContent: 'center',
      display: "flex"
}

export default function ModalCursos() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    <Button onClick={handleOpen}>Open modal</Button>
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Grid
         container
         direction="column"
         justifyContent="center"
         alignItems= 'center'
         alignContent= 'center'
        >
          <Typography sx={styleLetra}>Cursos/Especializaciones</Typography>
          <Typography sx={styleSubtitle} >Ingresa los cursos/espeializaciones, puedes registrar hasta 10 opciones. Ejm: excel, wordpress, marketing, redacción, publicidad en redes, etc.</Typography>
          <form>
          <CssTextField
                        fullWidth
                        variant="outlined"
                        label="Curso, Especializaciones"
                        name="cargo"
                    />
           <Autocomplete
                      fullWidth
                      disablePortal
                      id="combo-box-demo"
                      //options={top100Films}
                      renderInput={(params) => (
                        <TextField {...params} label="Nivel" />
                      )}
                      sx={styleAutocomplete}
                    />
          </form>
        </Grid>
      </Box>
    </Modal>
  </div>
  )
}

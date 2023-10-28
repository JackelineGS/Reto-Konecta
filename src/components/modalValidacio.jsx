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
    height: 'Hug 1,216px',
    backgroundColor: '#FFFFFF',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: 'flex'
  };

  const styleLetra = {
    color: "#181818",
    margin: '24px',
    fontFamily: "Barlow",
    fontWeight: "600",
    fontSize: "20px",
    borde: 'none',
    justifyContent: "center",
    alignItems:"center",
    display: 'flex'
  }

  const styleAutocomplete = {
    margin: "5px",
    width: '624px',
    height: "56px",
    borderRadius: "8px",
    display: "block",
    marginBottom: '1.5rem',
  }

  const CssButton = styled(Button)({
    backgroundColor: "#CE0F69",
    color: "white",
    borderRadius: "8px",
    padding: "6px 16px",
    cursor: "pointer",
    margin: "5px",
  
    "&:hover": {
      backgroundColor: "#B2BAC2",
    },
  
    "&:disabled": {
      backgroundColor: "#D9D8D8",
      cursor: "default",
    },
  });

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


export default function ModalValidacio() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
    <Button onClick={handleOpen}>Open modal</Button>
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems= 'center'
            alignContent= 'center' 
            >
             <Typography sx={styleLetra}>Experiencia</Typography>
             <form>
                <CssTextField
                        fullWidth
                        variant="outlined"
                        label="Cargo"
                        name="cargo"
                    />
                <CssTextField
                        fullWidth
                        variant="outlined"
                        label="Cargo"
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
                <CssTextField
                        fullWidth
                        variant="outlined"
                        label="Cargo"
                        name="cargo"
                    />
                <CssButton>Iniciar</CssButton>
             </form>

        </Grid>
      </Box>
    </Modal>
  </div>
  )
}

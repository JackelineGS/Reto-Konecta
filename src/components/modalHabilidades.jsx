import * as React from 'react';
import { Typography, Modal, Box, Button, Grid, Card, List, Checkbox } from '@mui/material'
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

  const styleTitle = {
    color: "#181818",
        fontFamily: "Barlow",
        fontWeight: "600",
        fontSize: "14px",
        alignItems:"left",
        margin: '1rem',
        textAling: "left", 
        display: "flex"
  }

  const styleCard = {
        margin: "5px",
        width: '624px',
        height: "56px",
        borderRadius: "8px",
        display: "block",
        marginBottom: '1.5rem',  
  }

  const styleSubtitle = {
    color: "#181818",
        fontFamily: "Barlow",
        fontWeight: "400",
        fontSize: "14px",
        alignItems:"left",
        margin: '1rem',
        textAling: "left", 
        display: "flex"
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

  const CssButton2 = styled(Button)({
    backgroundColor: "#D9D8D8",
    color: "#545454",
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

export default function ModalHabilidades() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const items = [
      {
        title: "Comunicación efectiva",
        checked: false,
      },
      {
        title: "Empatía",
        checked: false,
      },
      {
        title: "Escucha activa",
        checked: false,
      },
      {
        title: "Negociación",
        checked: false,
      },
      {
        title: "Actitud Positiva",
        checked: false,
      },
      {
        title: "Adaptabilidad",
        checked: false,
      },
      {
        title: "Iniciativa",
        checked: false,
      },
      {
        title: "Rapidez de respuesta",
        checked: false,
      },
      {
        title: "Proactividad",
        checked: false,
      }
    ];

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            <Box  style={{
              overflowY: "scroll",
              height: "80vh",
              display: 'block'
            }}>
            <Typography sx={styleLetra}>Habilidades</Typography>
            <Typography sx={styleSubtitle}>
              Selecciona las 5 habilidades que mejor te identifican
            </Typography>
            <List>
              {items.map((item) => (
                <Card key={item.title} sx={styleCard}>
                    <div style={{
                        display: 'flex'
                    }}>
                    <Checkbox checked={item.checked} />
                    <Typography sx={styleTitle}>{item.title}</Typography>
                    </div>
                </Card>
              ))}
            </List>

            <div style={{ float: "right", marginLeft: 0, marginTop: "60px" }}>
              <CssButton2 variant="contained" type="submit">
                Cancelar
              </CssButton2>
              <CssButton variant="contained" type="submit">
                Guardar
              </CssButton>
            </div>
            </Box>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

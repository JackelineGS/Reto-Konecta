import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export function CreateCvCard() {
  const cardStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(1, 153, 145, 0.041)",
    padding: "20px",
    width: "230px",
    height: "260px",
  };

  const linkStyles = {
    textDecoration: "none", // Quita el subrayado
    color: "black", // Cambia el color del texto
  };

  const labelStyles = {
    cursor: "pointer",
  };

  const {id} = useParams();
  const navigate = useNavigate()

  const openmodal = () => {
    navigate(`/formulario/${id}`)
  }

  return (
    <Card style={cardStyles} onClick={openmodal} >
        <label style={labelStyles}>
          <Typography variant='h5' component='div' textAlign='center'>
            Crear mi CV
          </Typography>
          <Typography variant='body2' color='text.secondary' textAlign='center'>
            Podrás crearlo rápidamente.
          </Typography>
        </label>
    </Card>
  );
}

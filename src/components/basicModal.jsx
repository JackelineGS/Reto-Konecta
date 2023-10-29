import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate, useParams } from "react-router-dom";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FFF",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const backdropStyle = {
  backgroundColor: "#002782",
};

export default function BasicModal() {
  const [open, setOpen] = useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate(`/formulario/${id}`);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{ style: backdropStyle }}
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            {/*traerlo y hacerlo con javascript*/}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            textAlign="center"
          >
            Redirigiendo
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

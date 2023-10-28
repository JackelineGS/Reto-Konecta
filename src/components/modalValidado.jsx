// import * as React from "react";
import React, { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

export default function ModalValidado() {
  const [open, setOpen] = useState(true);
  const [detailOffer,setDetailOffers] = useState(null)
  const [detailCv,setDetailCv] = useState(null)
  // const handleOpen = () => setOpen(true);
  const { id } = useParams();
  // console.log(id)
  const navigate = useNavigate()
  const handleClose = () => setOpen(false);

  const getAllInfo=async()=>{

    const response = await axios.get(`https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/offers/${id}`)
    setDetailOffers(response.data.data)
    let cv = sessionStorage.getItem('cv')
    setDetailCv(cv)
    await comparacion(response.data.data, cv)
  }

  // FLOWISE evaluacion de cv con ofertas

  async function queryEvaluacion(data) {
    console.log(data,'aqui everto')
    const response = await fetch(
      "https://konecta-1.onrender.com/api/v1/prediction/1125bc0a-918b-49cc-92b6-ce233deb96a3",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}


const comparacion = async(offer, cv) => {
  try {
    const response = await queryEvaluacion({"question": `'offer':${JSON.stringify(offer)},'cv':${cv}` });
    console.log(response, "logrado")
  
    if (!response) {
      return;
    }  
    if (response.includes("apto")) {
      navigate(`/modal/validando/${id}/apto/`)  
    }
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir en la función 'query' o en el bloque try
    console.error("Ocurrió un error:", error);
  }
}



useEffect(()=>{
  getAllInfo()

},[])


  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        BackdropProps={{ style: backdropStyle }}
      >
        <Box sx={modalStyle}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            textAlign='center'
          >
            {/*traerlo y hacerlo con javascript*/}
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{ mt: 2 }}
            textAlign='center'
          >
            Estamos analizando tu CV y la oferta que postulaste
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

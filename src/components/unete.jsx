import Box from "@mui/material/Box";
import Carrusel from "../components/carrusel";

export function Unete() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#002855",
          width: "95vw",
          height: 400,
        }}
      >
        <Carrusel></Carrusel>
      </Box>
    </>
  );
}
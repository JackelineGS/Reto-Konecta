import DataTable from "./listaPostulantes";
import { SideBar } from "./navbar";
import { Typography } from "@mui/material";

function Tabla() {
  const containerStyle = {
    display: "flex",
    marginTop: "30px",
  };

  const contentStyle = {
    flex: 1,
    padding: "30px",
  };

  return (
    <div style={containerStyle}>
      <SideBar />
      <div style={contentStyle}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#002855",
            marginTop: "30px",
          }}
        >
          Lista de postulantes
        </Typography>
        <DataTable />
      </div>
    </div>
  );
}

export default Tabla;

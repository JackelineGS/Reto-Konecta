import DataTable from './listaPostulantes';
import Header from './filterTabla';
import { SideBar } from './navbar';
import { Typography } from '@mui/material';

function Tabla() {
  const letra = {
    color: "#002855",
    margin: "24px",
    fontFamily: "Barlow",
    fontWeight: "600",
    fontSize: "20px",
    borde: "none",
    justifyContent: "left",
    alignItems: "left",
    display: "flex",
  
  }
  return (
    <div className="App">
        <SideBar/>
        <div style={{
          marginLeft: '16%'
        }}>
          
        <Typography sx={letra}>Lista de postulantes</Typography>  
        <Header />
        <DataTable />
        </div>
       
    </div>
  );
}

export default Tabla;
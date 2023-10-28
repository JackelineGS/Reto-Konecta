import  { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,

} from '@mui/material';

export default function ListaPostulantes() {

  async function fetchApplicants() {
    const host = 'https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev';
    const startDate = '2023-10-05';
    const endDate = '2023-10-05';
  
    const url = `${host}/applicants?startDate=${startDate}&endDate=${endDate}`;
  
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setTableData(data.data)
      console.log(data.data)
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null; // Maneja el error según tus necesidades
    }
  }

  useEffect(() => {
    fetchApplicants()
  }, [])

  const [tableData, setTableData] = useState([]);
  
  // SOLICITUD POST BIENVENIDO
  async function sendWelcomeNotification() {
    const host = 'https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/notifications/welcomeSin';
  
    const data = {
      recipientPhoneNumber: "+51925474137",
      user: "Sandy",
      trainingDate: "19/09",
      trainingHour: "13:10 pm",
      trainer: "Jackeline García",
      sede: "Av. República de Panamá 4603-4501, Lima 15047"
    };
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    try {
      const response = await fetch(host, requestOptions);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      console.log('Solicitud POST exitosa');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Solicitud POST RECONTACTO

  async function sendWelcomeNotificationrRecontacto() {
    const host = 'https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/notifications/reminder';
  
    const data = {
      "recipientPhoneNumber": "+51925474137",
      "user": "Sandy",
      "job": "Asesor de ATC Argentina",
      "path": "GyQwuk-IGC-TEST-290923"
    };
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    try {
      const response = await fetch(host, requestOptions);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } 
  
      console.log('Solicitud POST exitosa');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Solicitud POST NO APTO 

async function sendPostRequest() {

const hostHackLab = 'https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/notifications/status';
const requestData = {
  recipientPhoneNumber: "+51925474137",
  user: "Carlos"
};

  try {
    const response = await fetch(hostHackLab, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log('Solicitud POST exitosa');
  } catch (error) {
    console.error('Error:', error);
  }
}

  const handleStatusChange = (event, id) => {
    const newStatus = event.target.value;
    console.log(newStatus)
    if(newStatus === 'confirmado capa'){
      sendWelcomeNotification()
    } else if (newStatus === 'recontacto') 
    sendWelcomeNotificationrRecontacto() 
    else if (newStatus === 'no apto')
    sendPostRequest()

    const updatedData = tableData.map((row) =>
      row.id === id ? { ...row, status: newStatus } : row
    );

    setTableData(updatedData);

 }
  return (

    <TableContainer component={Paper}>
    { tableData.length > 0 ? 
      <Table style={{
        width: '90%',
        margin: '2rem'
      }
      }>
      <TableHead>
        <TableRow style={{backgroundColor:'#B2B4B2'}}>
          <TableCell>Nro.Documento</TableCell>
          <TableCell>Nombre</TableCell>
          <TableCell>Postulación</TableCell>
          <TableCell>IGC de postulación</TableCell>
          <TableCell>Titulo de Oferta</TableCell>
          <TableCell>Perfil de oferta</TableCell>
          <TableCell>Resultado</TableCell>
          <TableCell>Estado</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.document}</TableCell>
            <TableCell>{row.firstName}</TableCell>
            <TableCell>{row.createdDate}</TableCell>
            <TableCell>{row.processName}</TableCell>
            <TableCell>{row.offerName}</TableCell>
            <TableCell>{row.processInfo.profileName}</TableCell>
            <TableCell>{row.score}</TableCell>
            <TableCell>
            
              <Select
                value={row.status}
                onChange={(event) => handleStatusChange(event, row.id)}
              >
                <MenuItem value="no apto">No Apto</MenuItem>
                <MenuItem value="recontacto">Recontacto</MenuItem>
                <MenuItem value="confirmado capa">Confirmado a capacitación</MenuItem>
                <MenuItem value="rechaza">Rechaza propuesta</MenuItem>
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  : <p>Cargando</p>  
  }
  </TableContainer>
      );
    }

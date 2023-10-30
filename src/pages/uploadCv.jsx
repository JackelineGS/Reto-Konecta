import { SimpleContainer } from "../components/simpleContainer";
import { CustomizedSteppers } from "../components/stepper";
import { UploadFile } from "../components/upload-card";
import { CreateCvCard } from "../components/create-card";
import { Card, CardContent, Container } from "@mui/material";
import { Navbar } from "../components/navbar"

export function UploadCv() {
  return (
    <>
     <Navbar/>
      <CustomizedSteppers />
      <Container style={{
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        width: "1100px"
      }} > 
      <CardContent 
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '1rem',
        borderRadius: '20px',
        padding: '50px',
        width: '70%',
      }}>
      <UploadFile />
      </CardContent>
      </Container>
      
    </>
  );
}

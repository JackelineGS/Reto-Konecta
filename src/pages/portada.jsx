import { Unete } from "../components/unete";
import Offers from "../components/offers";
import { Card, Container } from '@mui/material'
import { BubbleChat } from 'flowise-embed-react'

const App = () => {
  return (
        <BubbleChat chatflowid="561008a9-fa01-4597-a243-723cae8c2cfb" apiHost="https://konecta-1.onrender.com" />
    );
};
App()

export default function Portada() {
  return (
    <>
    <Card style={{
      height: '85%',
      width: '100%',
      position: 'colum'
    }}>
      
    <Card 
     sx={{
      height: '610px',
      width: '100%',
      marginBottom: '1rem',
      borderRadius: 'none'
    }}
    >
    <Unete 
      />
    </Card>
    <Card
     sx={{
      width: "100%",
      height: '100%',
      marginTop: '1rem',
      //overflowY: "scroll",
    }}
    >
    <Offers />
      </Card>  
      </Card>
      <BubbleChat chatflowid="561008a9-fa01-4597-a243-723cae8c2cfb" apiHost="https://konecta-1.onrender.com" />
    </>
  );
}

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


 export default function Carrusel(props)

{ 
    const items = [
        {
            name: "",
            description: "Probably the most random thing you have ever seen!",
            img: "../assets/carrusel1"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel navButtonsAlwaysVisible> 
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
             <img src= {props.item.img}/>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
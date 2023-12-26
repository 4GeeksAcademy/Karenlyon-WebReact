import React from 'react'
import Card from './Cards';

const CardsComponents = () => {
    const persons = [
        {
            Title : 'Karen',
            Texto : 'futura developer',
            Boton : 'buscame'
           
        },
        {
            Title : 'Karen',
            Texto : 'futura developer',
            Boton : 'buscame'
            
        },
        {
            Title : 'Karen',
            Texto : 'futura developer',
            Boton : 'buscame'
        },
        {
            Title : 'Karen',
            Texto : 'futura developer',
            Boton : 'buscame'
        }
    ]
    return ( 
        <div style={{ display: 'flex'}}>  {
                persons.map((item, index) => {
                    return (
                        <Card key={`CardsComponents-${index}`} title={item.Title} Texto={item.Texto} boton={item.Boton} />
                    )
                })
            }
        </div>
    )
};

export default CardsComponents
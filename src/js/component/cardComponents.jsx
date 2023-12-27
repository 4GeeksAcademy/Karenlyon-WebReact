import React from 'react'
import Card from './Cards';

const CardsComponents = () => {
    const persons = [
        {
            Title : 'Manzanas',
            Texto : 'Experimenta la frescura y el sabor inigualable de nuestras manzanas premium. 🍏✨',
            Boton : 'Deleitate',
            imagenUrl : 'https://img.freepik.com/free-photo/red-apple-basket_74190-6134.jpg?size=626&ext=jpg&ga=GA1.2.567696288.1699729304&semt=sph',
           
        },
        {
            Title : 'Tutti-frutti',
            Texto : 'Deléitate con la explosión de sabores de nuestro tutti-fruti vibrante y delicioso. 🌈🍍🍓',
            Boton : 'Deleitate',
            imagenUrl : 'https://img.freepik.com/free-photo/assorted-mixed-fruits_74190-6961.jpg?size=626&ext=jpg&ga=GA1.2.567696288.1699729304&semt=sph',
        },
        {
            Title : 'Uvas Verdes',
            Texto : 'Descubre la frescura única de nuestras uvas verdes. Un bocado refrescante que te transportará a la dulzura de la naturaleza. 🍇✨',
            Boton : 'Deleitate',
            imagenUrl : 'https://img.freepik.com/free-photo/set-apple-green-grapes-basket-grunge-piece-sack-background-high-angle-view_176474-63988.jpg?size=626&ext=jpg&ga=GA1.1.567696288.1699729304&semt=sph',
        },
        {
            Title : 'Mandarina',
            Texto : 'Sumérgete en la jugosidad y el aroma fresco de nuestras mandarinas. Una experiencia cítrica que despierta tus sentidos. 🍊✨',
            Boton : 'Deleitate',
            imagenUrl : 'https://img.freepik.com/free-photo/top-view-peeled-clementine-mandarins-slices-wooden-plate_114579-61601.jpg?size=626&ext=jpg&ga=GA1.2.567696288.1699729304&semt=sph',
    },
    ]
    return ( 
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2  row-cols-lg-4 g-4">  {
                persons.map((item, index) => {
                    return (
                        <Card key={`CardsComponents-${index}`} title={item.Title} Texto={item.Texto} imagenUrl={item.imagenUrl} boton={item.Boton} />
                    )
                })
            }
        </div>
    )
};

export default CardsComponents  
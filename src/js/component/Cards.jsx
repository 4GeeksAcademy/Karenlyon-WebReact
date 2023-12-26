import React from "react";

const Card = (CardsComponents) => {

  return (
    <div className="contenedor" style={{padding:'7px'}}>
    <div className="card" style={{height:'350px'}}  >
      <img src="https://img.freepik.com/free-photo/tourist-take-photo-with-digital-camera-margaret-flowers-fields_335224-1346.jpg?size=626&ext=jpg&ga=GA1.1.567696288.1699729304&semt=sph" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{CardsComponents.title}</h5>
        <p className="card-text">{CardsComponents.texto}</p>
      </div>
      <div className="card-footer d-flex justify-content-center" >
      <button type="button" className="btn btn-warning" >{CardsComponents.boton}</button>
      </div>
    </div>
    </div>
    
    


  )
};

export default Card;


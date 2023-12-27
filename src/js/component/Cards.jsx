import React from "react";

const Card = (CardsComponents) => {

  return (
    

    <div className="col">
    <div className="card h-100">
    <img src={CardsComponents.imagenUrl} className="card-img-top"/>
  
      <div className="card-body">
        <h5 className="card-title">{CardsComponents.title}</h5>
        <p className="card-text">{CardsComponents.Texto}</p>
      </div>
      <div className="card-footer d-flex justify-content-center">
      <button type="button" className="btn btn-warning" >{CardsComponents.boton}</button>
      </div>
    </div>
  </div>
 
  )
};

export default Card;


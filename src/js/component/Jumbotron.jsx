import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLemon} from '@fortawesome/free-solid-svg-icons'


const Jumbotron = () => {
    return (
    <div className="jumbotron container-fluid py-5">
        <h1 className="display-5 fw-bold">Frutilici<FontAwesomeIcon icon={faLemon} size="xs" className="lime"/>us</h1>
        <p className="col-md-8 fs-4">
¡Bienvenido a Frutilicious! Descubre frutas frescas y deliciosas para alegrar tu día. 🍇🍊🍓 Explora ahora.</p>
        <button className="btn btn-lg p-2" type="button">Explorame</button>
      </div>
)};
export default Jumbotron 

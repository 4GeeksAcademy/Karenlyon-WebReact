import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping} from '@fortawesome/free-solid-svg-icons'




const NavBar = () =>{ 
    return (<nav className="navbar navbar-expand-lg">
  <div className="container-fluid ">
    <a className="navbar-brand text-light" style={{marginLeft:'10%'}} href="#"r><FontAwesomeIcon icon={faBasketShopping} />  Frutilicious</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  justify-content-end" style={{marginRight:'10%'}}id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link text-light" href="#">Explora la frescura 🍇</a>
        <a className="nav-link text-light" href="#">Tienda 🛒</a>
        <a className="nav-link text-light">Recetas 🍏</a>
        <a className="nav-link text-light"> Sobre Nosotros 🌱</a>
      </div>
    </div>
  </div>
</nav>)};

export default NavBar
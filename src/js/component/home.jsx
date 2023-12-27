import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import CardsComponents from "./cardComponents";
import Footer from "./Footer";
import Card from "./Cards";




//include images into your bundle


//create your first component

const Home = () => {
	return (
		<><NavBar /><div className="contenedor" style={{margin:'auto', width:'80%'}}><Jumbotron /><CardsComponents /></div><Footer /></>
	);
}

export default Home;

import React from "react";
import "./assets/css/App.css";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from './components/Footer';
import SeccionPruebas from './components/SesccionPruebas';
import Peliculas from './components/Peliculas'


 function App () {

  let btnString ="Ir al Blog";
  
  return (
    <div className="App">

      <Header />
      <Slider title="Bienvenido al Curso de React con Samuel Alvarado samu512br@" btn={btnString}/>

      <div className="center">
        <Peliculas/>
        
        <Sidebar />

      </div>
      <div className="clearBox">
        <Footer />
      </div>

    </div>
    
  );
}

export default App;

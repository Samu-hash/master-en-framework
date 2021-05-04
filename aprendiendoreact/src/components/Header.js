import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';

class Header extends Component{

    render(){
        return(
                <header id="header">
                    <div className="center">
                        {/*Logo-*/}
                        <div id="logo">
                            <img src={logo} className="app-logo" alt="LogoTipo" />
                            <span id="brand">
                                <strong>Curso</strong>React
                            </span>
                        </div>

                        {/*Menu*/}
                        <nav id="menu">
                            <ul>
                                <li><a href="index.html">Inicio</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="formulario.html">Formulario</a></li>
                                <li><a href="index.html">Pagina 1</a></li>
                                <li><a href="index.html">Pagina 2</a></li>
                            </ul>
                        </nav>
                        {/*Limpiar Flotado*/}
                        <div className="clearBox"></div> 
                    </div>
                </header>
        )
    }
}

export default Header;
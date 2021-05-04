import React, { Component } from 'react';

import MiComponente from "./MiComponente";

class SeccionPruebas extends Component {

    contador = 0;
    /*forma 1*/
    /*constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
    }*/

    /*forma 2*/
    state = {
        contador: 0
    }

    extraer(nombre, edad) {
        let presentacion = (
            <div>
                <h2>Hola soy {nombre}</h2>
                <h3>Tengo {edad} años</h3>
            </div>
        );
        return presentacion;
    }

    sumar = (e) => {
        //this.contador++;
        //this.state.contador++;
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar(e) {
        //this.contador--;
        //this.state.contador--;
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

    render() {
        let nombre = "Samuel Alvarado";
        return (
            <section id="content">
                <h2 className="subheader">Ultimos Articulos</h2>
                <p>Hola bievenido al curso de Samuel Alvarado</p>

                <h2 className="subheader">Funciones y JSX basico</h2>
                {this.extraer(nombre, 25)}

                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente />
                    <MiComponente />
                </section>

                <h2 className="subheader">Estados</h2>
                <p>Contador: {this.state.contador}</p>
                <p>
                    <input type="button" value="sumar" onClick={this.sumar} />
                    <input type="button" value="restar" onClick={this.restar.bind(this)} />
                </p>
            </section>
        );
    }
}

export default SeccionPruebas;
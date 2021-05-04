import React, { Component } from 'react';

class Peliculas extends Component {

    state = {
        peliculas: [
            { titulo: "batman vs superman", img: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVixGzDct56-tsHGWLZwtml5CejHjH2jjmxSag8NKtgyx7MNfqzhcC5192uzJoo-dpVg0SvdMiLqD37Sx4-MPCRgK0od.jpg?r=2a9" },
            { titulo: "Gran torino", img: "https://i.blogs.es/2646f8/gran_torino_-_h_-_2008/840_560.jpg" },
            { titulo: "Looper", img: "https://ichef.bbci.co.uk/images/ic/640x360/p07jj5dh.jpg" }
        ],
        nombre: "Samuel Adonay Alvarado Morales"
    }

    render() {
        return (
            <div id="content" className="peliculas">
                <div id='pelicula'>
                    <h2 className="subheader">Peliculas</h2>
                    <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>

                    {/**creacion componente peliculas*/}
                    <div id="articles" className="peliculas">
                        {
                            this.state.peliculas.map((p, i) => {
                                return (
                                    <article class="article-item" id="acticle-template">
                                        <div class="image-wrap">
                                            <img src={p.img} alt={p.titulo} />
                                        </div>

                                        <h2>{p.titulo}</h2>
                                        <span class="date">Hace minutos</span>
                                        <a href="#">Leer mas</a>

                                        <div class="clearBox"></div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Peliculas;
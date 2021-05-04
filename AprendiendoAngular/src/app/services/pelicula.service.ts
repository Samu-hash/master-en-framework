//permite aplicar un decorador a la clase ejemplo =new class
import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService {

    public peliculas: Pelicula[];

    constructor() {
        this.peliculas = [
            new Pelicula("Spiderman 4", 'https://larepublica.pe/resizer/65Qvpswo2XLbRD_1Ga-m8CaKTDE=/646x380/top/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/KQEKRNNFUZDPFISZOTT5PZLV5Y.jpg', 2019),
            new Pelicula("Vengadores EndGame", 'https://www.cinemascomics.com/wp-content/uploads/2019/08/30-referencias-marvel-vengadores-endgame.jpg', 2018),
            new Pelicula("Batman vs Superman", 'https://miro.medium.com/max/6000/1*z_2SU0aTw1m3wxAHRM5ROw.jpeg', 2017),
            new Pelicula("Batman vs Superman 2", 'https://miro.medium.com/max/6000/1*z_2SU0aTw1m3wxAHRM5ROw.jpeg', 2016)
        ];
    }

    holaMundo() {
        return 'hola mundo desde un servicios de angular';
    }

    getpeliculas() {
        return this.peliculas;
    }
}
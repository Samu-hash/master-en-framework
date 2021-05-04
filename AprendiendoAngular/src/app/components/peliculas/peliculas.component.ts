import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaServices: PeliculaService

  ) {
    this.titulo = "Componente peliculas";
    this.peliculas = this._peliculaServices.getpeliculas();
    this.fecha = new Date(2020, 8, 12);
  }

  ngOnInit(): void {
    console.log(this.peliculas);
    console.log("Componente iniciado");
    console.log(this._peliculaServices.holaMundo());
  }

  ngDoCheck(): void {
    console.log("DoCheck lanzado");
  }

  cambiarTitulo() {
    this.titulo = "El titulo ha sido cambiado";
  }

  ngOnDestroy(): void {
    console.log("El componente se eliminara");
  }

  mostrarFavorita(event) {
    this.favorita = event.pelicula;
  }



}

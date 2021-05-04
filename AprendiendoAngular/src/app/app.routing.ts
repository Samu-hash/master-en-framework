//IMPORTAR LOS MODULOS DEL ROUTER DE ANGULAR

//Esto permetira separar un modulo con las rutas para tenerlo separado en el franmework
import { ModuleWithProviders } from '@angular/core';

//generar los metodos de rutas 
import { Routes, RouterModule } from '@angular/router';

//IMPORTAR COMPONENTES A LOS CUALES LE QUIERO HACER UNA PAGINA EXCLUSIVA
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

//Array de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/articulo/:id', component: ArticleComponent },
    { path: 'blog/crear', component: ArticleNewComponent },
    { path: 'blog/editar/:id', component: ArticleEditComponent },
    { path: 'buscar/:search', component: SearchComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'pagina-de-pruebas/:nombre/:apellido', component: PaginaComponent },
    { path: 'pagina-de-pruebas', component: PaginaComponent },
    { path: '**', component: ErrorComponent },
];

//EXPORTAR EL MODULO DE ROUTER

//esto es para establecerlo como servicio
export const appRoutingProviders: any[] = [];

//Esto establece todas las rutas y funcionen destro del sistema de routing de angular
export const routingModule: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
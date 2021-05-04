import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import swal from 'sweetalert';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;
  public urlDefault: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
    this.urlDefault = "assets/images/default.jpg";
  }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        res => {
          if (res.article) {
            this.article = res.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        err => {
          this._router.navigate(['/home']);
        }
      );
    });
  }

  delete(id) {
    swal({
      title: "¿Estas seguro?",
      text: "¡Una vez borrado el articulo no se podra recuperar!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this._articleService.delete(id).subscribe(
            res => {
              this._router.navigate(['/blog']);
            },
            err => {
              console.log(err);
              this._router.navigate(['/blog']);
            }
          )
          swal("¡El articulo ha sido borrado!", {
            icon: "success",
          });
        } else {
          swal("¡Traquilo, nada se ha borrado!");
        }
      });
  }

}

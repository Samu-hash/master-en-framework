import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public is_edit: boolean;
  public page_title: string;
  public url: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + 'upload-image'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo..',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _articleServices: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', null, null);
    this.is_edit = true;
    this.page_title = "Editar articulo";
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit() {
    this._articleServices.update(this.article._id, this.article).subscribe(
      res => {
        if (res.status == 'success') {
          //ALERTA
          swal('Articulo editado!!', 'El articulo se ha editado correctamente.', 'success');

          this._router.navigate(['/blog/articulo', this.article._id]);
        } else {
          swal('Edicion fallida!!', 'El articulo no se ha editado.', 'error');
          this.status = 'error';
        }
      },
      err => {
        console.log(err);
        this.status = 'error';
      }
    );
  }
 
  imageUpload(data) {
    this.article.image = data.body.image;
  }

  getArticle() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleServices.getArticle(id).subscribe(
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

}

import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from 'src/app/models/article';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Article[];
  public url: string;
  public urlDefault:string;

  constructor(
    private _articleService: ArticleService
  ) { 
    this.url =Global.url;
    this.urlDefault ="assets/images/default.jpg";
  }

  ngOnInit(): void {
    this._articleService.getArticles().subscribe(
      res => {
        if (res.articles) {
          this.articles = res.articles;
        }
      }, err => {
        console.log(err);
      }
    )
  }

}

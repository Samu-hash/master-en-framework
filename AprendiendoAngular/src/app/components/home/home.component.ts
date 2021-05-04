import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public title: string;
  public articles:Article[];

  constructor(
    public _articleService: ArticleService
  ) {
    this.title = 'Últimos artículos';
  }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class NewquoteComponent implements OnInit {
  author: any;
  quote: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.author = {};
    this.quote = {};
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.getAuthor(params['id']).subscribe(author => {
        this.author = author;
      });
    });
  }

  createQuote() {
    this.quote.author = this.author.name;
    this._httpService.createQuote(this.quote).subscribe(() => {});
    this._router.navigate(['/author/', this.author._id]);
  }
}

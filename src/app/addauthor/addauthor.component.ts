import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  author: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.author = {};
  }

  ngOnInit() {}

  createAuthor() {
    this._httpService.createAuthor(this.author).subscribe(() => {});
    this._router.navigate(['/author']);
  }
}

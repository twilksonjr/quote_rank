import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getAuthors() {
    return this._http.get('/authors');
  }

  getAuthor(id) {
    return this._http.get(`/authors/${id}`);
  }

  createAuthor(author) {
    return this._http.post('/authors', author);
  }

  addVote(quote) {
    return this._http.put(`/quotes/${quote._id}`, quote);
  }

  deleteQuote(id) {
    return this._http.delete(`/quotes/${id}`);
  }

  createQuote(quote) {
    return this._http.post('/quotes', quote);
  }
}

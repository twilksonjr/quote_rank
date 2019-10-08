import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './authors/authors.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { QuoteComponent } from './quote/quote.component';
import { NewquoteComponent } from './newquote/newquote.component';

const routes: Routes = [
  { path: 'author', component: AuthorsComponent },
  { path: 'author/new', component: AddauthorComponent },
  { path: 'author/:id', component: QuoteComponent },
  { path: 'newquote/:id', component: NewquoteComponent },
  { path: '', pathMatch: 'full', redirectTo: '/author' },
  { path: '**', component: AuthorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

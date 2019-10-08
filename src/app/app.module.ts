import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthorsComponent } from './authors/authors.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { QuoteComponent } from './quote/quote.component';
import { NewquoteComponent } from './newquote/newquote.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AddauthorComponent,
    QuoteComponent,
    NewquoteComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}

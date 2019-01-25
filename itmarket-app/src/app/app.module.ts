import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { SqlComponent } from './sql/sql.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    SqlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { SqlComponent } from './sql/sql.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { CSharpComponent } from './csharp/csharp.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { JavaComponent } from './java/java.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    SqlComponent,
    JavaScriptComponent,
    CSharpComponent,
    MicrosoftComponent,
    JavaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

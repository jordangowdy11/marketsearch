import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpClientModule } from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { PythonComponent } from './python/python.component';
import { ScrumComponent } from './scrum/scrum.component';
import { DevopsComponent } from './devops/devops.component';
import { AwsComponent } from './aws/aws.component';
import { PermanentComponent } from './permanent/permanent.component';
import { ContractedComponent } from './contracted/contracted.component';
import { SqlComponent } from './sql/sql.component';
import { CSharpComponent } from './csharp/csharp.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { JavaComponent } from './java/java.component';
import { PermanantsqlComponent } from './permanantsql/permanantsql.component';
import { PermanantjavascriptComponent } from './permanantjavascript/permanantjavascript.component';
import { PermanantcsharpComponent } from './permanantcsharp/permanantcsharp.component';
import { PermanantmicrosoftComponent } from './permanantmicrosoft/permanantmicrosoft.component';
import { PermanantjavaComponent } from './permanantjava/permanantjava.component';
import { PermananthtmlComponent } from './permananthtml/permananthtml.component';
import { PermanantpythonComponent } from './permanantpython/permanantpython.component';
import { PermanantscrumComponent } from './permanantscrum/permanantscrum.component';
import { PermanantdevopsComponent } from './permanantdevops/permanantdevops.component';
import { PermanantawsComponent } from './permanantaws/permanantaws.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { JsComponent } from './js/js.component';

@NgModule({
  
  declarations: [
    AppComponent,
    HtmlComponent,
    PythonComponent,
    ScrumComponent,
    DevopsComponent,
    AwsComponent,
    PermanentComponent,
    ContractedComponent,
    SqlComponent,
    CSharpComponent,
    MicrosoftComponent,
    JavaComponent,
    PermanantsqlComponent,
    PermanantjavascriptComponent,
    PermanantcsharpComponent,
    PermanantmicrosoftComponent,
    PermanantjavaComponent,
    PermananthtmlComponent,
    PermanantpythonComponent,
    PermanantscrumComponent,
    PermanantdevopsComponent,
    PermanantawsComponent,
    SubscribeComponent,
    JsComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

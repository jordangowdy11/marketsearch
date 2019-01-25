import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
<<<<<<< HEAD
import { PythonComponent } from './python/python.component';
import { ScrumComponent } from './scrum/scrum.component';
import { DevopsComponent } from './devops/devops.component';
import { AwsComponent } from './aws/aws.component';
import { PermanentComponent } from './permanent/permanent.component';
import { ContractedComponent } from './contracted/contracted.component';
=======
import { SqlComponent } from './sql/sql.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { CSharpComponent } from './csharp/csharp.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { JavaComponent } from './java/java.component';
>>>>>>> 0367fa857856b2afab3a15ed32d6ffa23b1135a7

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
<<<<<<< HEAD
    PythonComponent,
    ScrumComponent,
    DevopsComponent,
    AwsComponent,
    PermanentComponent,
    ContractedComponent
=======
    SqlComponent,
    JavaScriptComponent,
    CSharpComponent,
    MicrosoftComponent,
    JavaComponent
>>>>>>> 0367fa857856b2afab3a15ed32d6ffa23b1135a7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

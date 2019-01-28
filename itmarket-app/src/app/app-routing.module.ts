import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { PermanentComponent } from './permanent/permanent.component';
import { ContractedComponent } from './contracted/contracted.component';
import { PythonComponent } from './python/python.component';
import { SqlComponent } from './sql/sql.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { CSharpComponent } from './csharp/csharp.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { JavaComponent } from './java/java.component';
import { HtmlComponent } from './html/html.component';
import { ScrumComponent } from './scrum/scrum.component';
import { DevopsComponent } from './devops/devops.component';
import { AwsComponent } from './aws/aws.component';
import { PermanantpythonComponent } from './permanantpython/permanantpython.component';
import { PermanantsqlComponent } from './permanantsql/permanantsql.component';
import { PermanantjavascriptComponent } from './permanantjavascript/permanantjavascript.component';
import { PermanantcsharpComponent } from './permanantcsharp/permanantcsharp.component';
import { PermanantmicrosoftComponent } from './permanantmicrosoft/permanantmicrosoft.component';
import { PermanantjavaComponent } from './permanantjava/permanantjava.component';
import { PermananthtmlComponent } from './permananthtml/permananthtml.component';
import { PermanantscrumComponent } from './permanantscrum/permanantscrum.component';
import { PermanantdevopsComponent } from './permanantdevops/permanantdevops.component';
import { PermanantawsComponent } from './permanantaws/permanantaws.component';

const routes: Routes = [
  {path:'permanent', component:PermanentComponent},
  {path:'contract', component:ContractedComponent},
  {path:'contract/python',component:PythonComponent},
  {path:'contract/sql',component:SqlComponent},
  {path:'contract/javascript',component:JavaScriptComponent},
  {path:'contract/csharp',component:CSharpComponent},
  {path:'contract/microsoft',component:MicrosoftComponent},
  {path:'contract/java',component:JavaComponent},
  {path:'contract/html',component:HtmlComponent},
  {path:'contract/scrum',component:ScrumComponent},
  {path:'contract/devops',component:DevopsComponent},
  {path:'contract/aws',component:AwsComponent},
  {path:'permanent/python',component:PermanantpythonComponent},
  {path:'permanent/sql',component:PermanantsqlComponent},
  {path:'permanent/javascript',component:PermanantjavascriptComponent},
  {path:'permanent/csharp',component:PermanantcsharpComponent},
  {path:'permanent/microsoft',component:PermanantmicrosoftComponent},
  {path:'permanent/java',component:PermanantjavaComponent},
  {path:'permanent/html',component:PermananthtmlComponent},
  {path:'permanent/scrum',component:PermanantscrumComponent},
  {path:'permanent/devops',component:PermanantdevopsComponent},
  {path:'permanent/aws',component:PermanantawsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

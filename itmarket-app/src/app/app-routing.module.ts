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
//we are only doing permanent at the mo!
import { PermanantpythonComponent } from './permanantpython/permanantpython.component';
import { PermanantsqlComponent } from './permanantsql/permanantsql.component';
import { PermanantjavascriptComponent } from './permanantjavascript/permanantjavascript.component';
import { PermanantcsharpComponent } from './permanantcsharp/permanantcsharp.component';
import { PermanantmicrosoftComponent } from './permanantmicrosoft/permanantmicrosoft.component';
//j do form here <perm-language>
import { PermanantjavaComponent } from './permanantjava/permanantjava.component';
import { PermananthtmlComponent } from './permananthtml/permananthtml.component';
import { PermanantscrumComponent } from './permanantscrum/permanantscrum.component';
import { PermanantdevopsComponent } from './permanantdevops/permanantdevops.component';
import { PermanantawsComponent } from './permanantaws/permanantaws.component';

const routes: Routes = [
  {path:'permanent', component:PermanentComponent, data: {animation: 'PermPage'}},
  {path:'contract', component:ContractedComponent, data: {animation: 'ContractPage'}},
  {path:'contract/python',component:PythonComponent, data: {animation: 'ContPy'}},
  {path:'contract/sql',component:SqlComponent, data: {animation: 'ContSQL'}},
  {path:'contract/javascript',component:JavaScriptComponent, data: {animation: 'ContJS'}},
  {path:'contract/csharp',component:CSharpComponent, data: {animation: 'ContCSharp'}},
  {path:'contract/microsoft',component:MicrosoftComponent, data: {animation: 'ContMS'}},
  {path:'contract/java',component:JavaComponent, data: {animation: 'ContJava'}},
  {path:'contract/html',component:HtmlComponent, data: {animation: 'ContHtml'}},
  {path:'contract/scrum',component:ScrumComponent, data: {animation: 'ContScrum'}},
  {path:'contract/devops',component:DevopsComponent, data: {animation: 'ContDevops'}},
  {path:'contract/aws',component:AwsComponent, data: {animation: 'ContAWS'}},
  {path:'permanent/python',component:PermanantpythonComponent, data: {animation: 'PermPy'}},
  {path:'permanent/sql',component:PermanantsqlComponent, data: {animation: 'PermSQL'}},
  {path:'permanent/javascript',component:PermanantjavascriptComponent, data: {animation: 'PermJS'}},
  {path:'permanent/csharp',component:PermanantcsharpComponent, data: {animation: 'PermCSharp'}},
  {path:'permanent/microsoft',component:PermanantmicrosoftComponent, data: {animation: 'PermMS'}},
  {path:'permanent/java',component:PermanantjavaComponent, data: {animation: 'PermJava'}},
  {path:'permanent/html',component:PermananthtmlComponent, data: {animation: 'PermHtml'}},
  {path:'permanent/scrum',component:PermanantscrumComponent, data: {animation: 'PermScrum'}},
  {path:'permanent/devops',component:PermanantdevopsComponent, data: {animation: 'PermDevops'}},
  {path:'permanent/aws',component:PermanantawsComponent, data: {animation: 'PermAWS'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

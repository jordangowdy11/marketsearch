import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {path:'permanant', component:PermanentComponent},
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

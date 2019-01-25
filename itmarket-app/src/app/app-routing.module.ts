import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermanentComponent } from './permanent/permanent.component';
import { ContractedComponent } from './contracted/contracted.component';

const routes: Routes = [
  {path:'permanant', component:PermanentComponent},
  {path:'contract', component:ContractedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./components/form/form.component";
import {ApiComponent} from "./components/ApiComponent/api.component";

const routes: Routes = [

  {path:'Q2', component: ApiComponent},
  {path:'Q1', component: FormComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

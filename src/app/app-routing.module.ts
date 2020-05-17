import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoggiesFirstKeeyusPageComponent } from "./doggies-first-keeyus-page/doggies-first-keeyus-page.component";

const routes: Routes = [
  { path: '', component: DoggiesFirstKeeyusPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

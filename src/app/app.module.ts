import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoggiesFirstKeeyusPageComponent } from './doggies-first-keeyus-page/doggies-first-keeyus-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DoggiesFirstKeeyusPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

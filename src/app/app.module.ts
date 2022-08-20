import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MyFirstComponent } from './my-first/my-first.component';
import { MyFirst2Component } from './my-first2/my-first2.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormModule } from './shared/form/form.module';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MyFirst2Component,
    DataBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './pages/form/form.component';
import { FormsModule  } from "@angular/forms";
import { PaginaComponent } from './pages/pagina/pagina.component';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    FormComponent,
    PaginaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

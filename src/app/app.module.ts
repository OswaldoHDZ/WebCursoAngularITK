import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './pages/form/form.component';
import { FormsModule } from "@angular/forms";
import { PaginaComponent } from './inicio/pagina/pagina.component';
import { MatTableModule } from '@angular/material/table';
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { OperacionComponent } from './pages/operacion/operacion.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UppercasePipe } from './pipes/mayuculas.pipe';
import { SortPipe } from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    FormComponent,
    PaginaComponent,
    CalculadoraPipe,
    OperacionComponent,
    UppercasePipe,
    SortPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

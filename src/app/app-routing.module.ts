import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComponent } from './pages/pagina/pagina.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { OperacionComponent } from './pages/operacion/operacion.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent, },
  { path: 'inicio', component: PaginaComponent, },
  { path: 'operacion', component: OperacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
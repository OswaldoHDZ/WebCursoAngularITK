import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComponent } from './pages/pagina/pagina.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { OperacionComponent } from './pages/operacion/operacion.component';
const routes: Routes = [
  { path: 'inicio', component: PaginaComponent, },
  { path: 'operacion', component: OperacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
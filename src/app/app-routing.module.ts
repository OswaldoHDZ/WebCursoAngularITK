import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacionComponent } from './pages/operacion/operacion.component';

import { AuthGuard } from './guards/auth-guard.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'operacion', component: OperacionComponent },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(mod => mod.InicioModule),
    canLoad: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
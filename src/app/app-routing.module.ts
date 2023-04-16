import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPaginacionComponent } from '../app/main-paginacion/main-paginacion.component';
import { InicioAppComponent } from './inicio-app/inicio-app.component';

const routes: Routes = [
  { path: '', component: InicioAppComponent },
  { path: 'tabla', component: MainPaginacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

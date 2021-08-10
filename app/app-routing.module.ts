import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './loginusuario/login/login.component';
import { HomeComponent } from './loginusuario/home/home.component';
import { Registrar_usuarios } from './loginusuario/register/registrar_usuarios/registrar_usuarios';
import { DashboardComponent } from './loginusuario/dashboard/dashboard.component';
import { AuthguardGuard } from './loginusuario/authguard.guard';
import { Registrarequipos } from './loginusuario/register/registrar_equipos/registrar_equipos';
import {Registrar_partidos} from './loginusuario/register/registrar_partidos/registrar_partidos';

const routes: Routes = [
  { path: '', component: HomeComponent }, //la pagina que quiero recargar al principio
  { path: 'ingresar', component: LoginComponent },
  //{ path: 'pagina_principal', component: HomeComponent },
  { path: 'pagina_principal', component: HomeComponent },
  { path: 'registrar_usuarios', component: Registrar_usuarios },
  { path: 'area_administradora', component: DashboardComponent,canActivate: [AuthguardGuard] },
  { path: 'registrar_equipos', component: Registrarequipos },
  { path: 'registrar_partidos/:username', component: Registrar_partidos }
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

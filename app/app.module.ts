
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //import actualizado para hacer peticiones a php y msql ya no trae .map

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UsuariosService } from './formulariocompleto/usuarios.service';

import { FormulariocompletoComponent } from './formulariocompleto/formulariocompleto.component';

import { HomeComponent } from './loginusuario/home/home.component';
import { LoginComponent } from './loginusuario/login/login.component';
import { Registrar_usuarios } from './loginusuario/register/registrar_usuarios/registrar_usuarios';
import { DashboardComponent } from './loginusuario/dashboard/dashboard.component';
import { Registrarequipos } from './loginusuario/register/registrar_equipos/registrar_equipos';
import { Servicioequipos } from './loginusuario/register/registrar_equipos/servicio_registrar_equipos';
import {Registrar_partidos} from './loginusuario/register/registrar_partidos/registrar_partidos';
import { Servicio_registrar_partidos } from './loginusuario/register/registrar_partidos/servicio_registrar_partidos';



@NgModule({
  declarations: [
    AppComponent,
    FormulariocompletoComponent,
    HomeComponent,
    LoginComponent,
    Registrar_usuarios,
    DashboardComponent,
    Registrarequipos,
    Registrar_partidos
   
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [

    UsuariosService,
    Servicioequipos,
    Servicio_registrar_partidos
   
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


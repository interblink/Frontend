import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { allowedNodeEnvironmentFlags } from 'process';

@Injectable({
  providedIn: 'root'
})

export class Servicio_registrar_partidos {

  URL = 'http://localhost/Angular1/API/registro_partidos/';

  constructor(private http: HttpClient) {}


  obtenerEquipos() {
    return this.http.get(`${this.URL}ObtenerEquipos1.php`);
  }

  

}
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { allowedNodeEnvironmentFlags } from 'process';

@Injectable({
  providedIn: 'root'
})

export class Servicioequipos {

  URL = 'http://localhost/Angular1/API/registro_partidos/';

  constructor(private http: HttpClient) {}


  obtenerEquipos() {
    return this.http.get(`${this.URL}ObtenerEquipos.php`);
  }

  altaEquipos(equipo) {
    // alert("llego al servicio");
     //alert(equipo.nombre_equipo);
    return this.http.post(`${this.URL}AltaEquipos.php`, JSON.stringify(equipo));
  }

  bajaEquipos(id_equipo: number) {
    //alert("llego al servicio borrar"+id_equipo);
    return this.http.get(`${this.URL}BajaEquipos.php?id_equipo=${id_equipo}`);
  }

  seleccionarEquipos(id_equipo: number) {
    return this.http.get(`${this.URL}SeleccionarEquipos.php?id_equipo=${id_equipo}`);
  }

  editarEquipos(equipo) {
    //alert(equipo.id_equipo);
    //alert(equipo.nombre_equipo);
    return this.http.post(`${this.URL}EditarEquipos.php`, JSON.stringify(equipo));
  }
}
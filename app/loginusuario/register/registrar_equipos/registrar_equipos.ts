import { Component, OnInit, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Servicioequipos } from './servicio_registrar_equipos';

declare var ventana1:any;//para utilizar las funciones de javascript
declare var ventana2:any;//para utilizar las funciones de javascript
declare var ventana5:any;//para utilizar las funciones de javascript

@Component({
  selector: 'app-registrar-equipos',
  templateUrl: './registrar_equipos.html',
  styleUrls: ['./registrar_equipos.css']
})
export class Registrarequipos implements OnInit {
  
  equipos = null;

  equipo = {
    id_equipo: null,
    nombre_equipo:null
  }
  constructor(private servicio_equipo: Servicioequipos, private formBuilder: FormBuilder, private http:HttpClient) { }
  
  ngOnInit() {
   this.obtenerEquipos();
  }

  obtenerEquipos() {
    this.servicio_equipo.obtenerEquipos().subscribe(
      result => this.equipos = result
    );
  }


  ventana1(){  //ventana de eliminado con exito

    ventana1();  
  }
  

  ventana2(){  //ventana de se inserto con exito

    ventana2();
}

ventana5(){  //ventana de se modificado con exito

  ventana5();
}

  altaEquipos() {
   // alert("llego al .ts");
    //alert(this.equipo.nombre_equipo);
    this.servicio_equipo.altaEquipos(this.equipo).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          //alert(datos['mensaje']);
          ventana2();  //ventana de se inserto con exito
          this.obtenerEquipos();
        }
      }
    );
  }

  bajaEquipos(id_equipo) {
    this.servicio_equipo.bajaEquipos(id_equipo).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          //alert(datos['mensaje']);
          ventana1();  
          this.obtenerEquipos();
        }
      }
    );
  }

  editarEquipos() {
    //alert(this.equipo.id_equipo);
    this.servicio_equipo.editarEquipos(this.equipo).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          //alert(datos['mensaje']);
          ventana5();
          this.obtenerEquipos();
        }
      }
    );
  }

  seleccionarEquipos(id_equipo) {
    this.servicio_equipo.seleccionarEquipos(id_equipo).subscribe(
      result => this.equipo = result[0]
    );
  }

  hayRegistros() {
    if(this.equipos == null) {
      return false;
    } else {
      return true;
    }
  }
}








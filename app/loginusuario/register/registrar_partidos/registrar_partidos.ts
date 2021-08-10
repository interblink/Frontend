import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../variables_globales'
import { ActivatedRoute } from '@angular/router';
import { Servicio_registrar_partidos } from './servicio_registrar_partidos';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-registrar_partidos',
    templateUrl: './registrar_partidos.html',
    styleUrls: ['./registrar_partidos.css']
  })
  export class Registrar_partidos implements OnInit {
  
    username: String;
    equipos = null;

    equipos2 = {
      id_equipo: null,
      nombre_equipo:null
    }


    contactos1=null;
    nombre: null;
    
    contacto: FormGroup;
    submitted = false;
      
    contacto2 = {
      idUsuario: null,
      equipo_local: null,
      equipo_visitante: null,
      registeredOn: null,
      goles_local_1: null,
      goles_visitante_1: null
    }
  

    constructor(private Servicio_registrar_partidos: Servicio_registrar_partidos, private _route: ActivatedRoute, private formBuilder: FormBuilder, private http:HttpClient) { }
   
    ngOnInit() {

     this.username = this._route.snapshot.paramMap.get('username');
     this.obtenerEquipos();
     
     this.contacto = this.formBuilder.group({
      equipo_local: ['', Validators.required],
      equipo_visitante: ['', Validators.required],     
      registeredOn: ['', [Validators.required]],
      goles_local_1: ['', Validators.required],
      goles_visitante_1: ['', Validators.required]
      

     });
  }

  get f() { return this.contacto.controls; }



     Registrar() { //funcion de formulario registrar
     
        this.submitted = true;
        
        if (this.contacto.invalid) {
            return;
        }
        //alert('Mensaje Enviado !'+JSON.stringify(this.contacto.value))
      //  console.log('Mensaje Enviado !'+JSON.stringify(this.contacto.value))
          
          this.Registrar_equipo_partido();
 
    }



  obtenerEquipos() {
    this.Servicio_registrar_partidos.obtenerEquipos().subscribe(
      result => this.equipos = result
    );
  }

  Registrar_equipo_partido(){
   // alert("aaaaaa"+this.equipos.goles_visitante_1);

  }


}
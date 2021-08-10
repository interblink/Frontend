import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../serviciologin';
import { positionService } from '@ng-bootstrap/ng-bootstrap/util/positioning';

declare var ventana2:any;//para utilizar las funciones de javascript

@Component({
    selector: 'app-registrar_usuarios',
    templateUrl: './registrar_usuarios.html',
    styleUrls: ['./registrar_usuarios.css']
    })

export class Registrar_usuarios implements OnInit {
  
   
  contactos1=null;
  nombre: null;
  
  contacto: FormGroup;
  submitted = false;
    
  contacto2 = {
    idUsuario: null,
    sexo: null,
    nombre: null,
    correo: null,
    username: null,
    password: null
  }
  

  constructor(private dataService: ApiService, private formBuilder: FormBuilder, private http:HttpClient) { }
  
   

   ngOnInit() {
    
    
    this.contacto = this.formBuilder.group({
        sexo: ['', Validators.required],
        nombre: ['', Validators.required],     
        correo: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: ['', Validators.required]
        

    });
     
    
    
    }   

ventana2(){

     ventana2();


}

      /*Directiva de Angular que agrega una 
      propiedad get para facilitar el acceso a 
      los controles de formulario en el HTML*/
  
     get f() { return this.contacto.controls; }



     Registrar() { //funcion de formulario registrar
     
        this.submitted = true;
        
        if (this.contacto.invalid) {
            return;
        }
        //alert('Mensaje Enviado !'+JSON.stringify(this.contacto.value))
      //  console.log('Mensaje Enviado !'+JSON.stringify(this.contacto.value))
          
          this.InsercionDatos();
 
    }


    InsercionDatos() {
       
      //alert('Mensaje Enviado !'+JSON.stringify(this.contacto.value))
      this.dataService.InsercionDatos(this.contacto.value).subscribe(
        datos => {
          if(datos['resultado'] == 'OK') {
            //alert("Datos insertados");
          ventana2(); //ventana bonita qu dice datos insertados
           
            
          }
        }
      );
    }

   
    hayRegistros() {
    if(this.contactos1 == null) {
      return false;
    } else {
      return true;
    }
  }



}


import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../serviciologin';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../variables_globales'


declare var ventana4:any;//para utilizar las funciones de javascript

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    
    contacto: FormGroup;
    submitted = false;
 
      
    contacto2 = {
      idPersona: null,
      username: null,
      password: null
    }
    


constructor(private dataService: ApiService, private formBuilder: FormBuilder, private http:HttpClient, private router:Router) {}

    ngOnInit() {

        
        this.contacto = this.formBuilder.group({
         
            
            username: ['', Validators.required],
            password: ['', Validators.required]
            

        });
     
    }
        
        get f() { return this.contacto.controls; }



        IniciarSeccion() { //funcion de formulario iniciar seccion
            
       
            this.submitted = true;
            
            if (this.contacto.invalid) {
                return;
            }
            //alert('Mensaje Enviado !'+JSON.stringify(this.contacto.value))
          //  console.log('Mensaje Enviado !'+JSON.stringify(this.contacto.value))
              
              this.Iniciar_seccion(this.contacto);
            
        }
    




ventana4(){

    this.ventana4();

}



Iniciar_seccion(contacto){
   
this.dataService.userlogin(contacto.value.username,contacto.value.password)
.pipe(first())
.subscribe(
data => {
    
    var title = contacto.value.username;
    GlobalConstants.username1= title;


 //console.log(contacto.value.username); //imprimi el username que realizo el inicio de seccion
//username_copia=contacto.value.username;//almaceno el username en u
 //console.log(u);

const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/area_administradora';

this.router.navigate([redirect]);

},

error => {

ventana4(); //ventana de mensaje javascripts cuando esta incorrectos los datos

});
}



//get email() { return this.contacto.get('email'); }
//get password() { return this.contacto.get('password'); }
}
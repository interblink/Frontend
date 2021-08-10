import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
providedIn: 'root'
})

export class ApiService {

  redirectUrl: string;

 

  URL_Inserciondatos = 'http://localhost/Angular1/API/angular_admin/php/register.php';

  baseUrl_Userlogin:string = "http://localhost/Angular1/API/angular_admin/php/login.php";

  
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

constructor(private http: HttpClient ,private httpClient : HttpClient) { }



public userlogin(username, password) {
//alert("username: "+username+" password: "+password); //aparece el usuario de la persona que metio los datos
return this.httpClient.post<any>(this.baseUrl_Userlogin + '/login.php', { username, password })
.pipe(map(Users => {
this.setToken(Users[0].name);
this.getLoggedInName.emit(true);
return Users;
}));
}

InsercionDatos(contacto) {
    //alert("llego al sevicio");
    //alert('llego al servicio !'+JSON.stringify(contacto));
    
    return this.http.post(`${this.URL_Inserciondatos}/register.php`, JSON.stringify(contacto));
  }


//token
setToken(token: string) {
localStorage.setItem('token', token);
}
getToken() {
return localStorage.getItem('token');
}
deleteToken() {
localStorage.removeItem('token');
}
isLoggedIn() {
const usertoken = this.getToken();
if (usertoken != null) {
return true
}
return false;
}
}
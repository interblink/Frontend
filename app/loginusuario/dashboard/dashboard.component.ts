import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../variables_globales'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  username = null;

   constructor() {

   

    }
    

   ngOnInit() {
        
    this.username = GlobalConstants.username1;

      //console.log("llego al dashboard " + title1);
   
  

   
  }

}
import { Component, OnInit } from '@angular/core';

import {Utilisateur} from 'src/app/model/utilisateur';
import { CalculServiceService } from '../service/calcul-service.service';
@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit {

  //var nom : any;
  
   message :any;
   x:any;
   nombre:any;
   valeur:any;
   username:any;
   
  //listUsers : Utilisateur[]; 
  listUsers=[
      {id: 1, name: "Leanne Graham", username: "Bret", email:"Sincere@april.biz"},
      {id: 2, name: "Ervin Howell", username: "Bret", email: "Shanna@melissa.tv"},
      {id: 3, name: "Clementine Bauch", username: "Samantha", email:"Nathan@yesenia.net"}];
      constructor(private _todoservice : CalculServiceService) { }

    verifier(param:any)
    {
    
     this.username = param;
      this.nombre = this._todoservice.getNumberOf(this.listUsers,"username",this.username );
      this.message = "le nombre d'utilisateur ayant un username  "+this.username +" est égal à "+this.nombre
      //console.log(this.nombre);
    }

    ngOnInit(): void
    {
           this.x = this._todoservice.getNumberOf(this.listUsers,"username", "Bret");
      //console.log(this.x);
    }
  

}


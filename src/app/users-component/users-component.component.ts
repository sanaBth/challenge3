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
   valeur:any;
   username:any;
  //listUsers : Utilisateur[]; 
  listUsers=[
      {id: 1, name: "Leanne Graham", username: "Bret", email:"Sincere@april.biz"},
      {id: 2, name: "Ervin Howell", username: "Bret", email: "Shanna@melissa.tv"},
      {id: 3, name: "Clementine Bauch", username: "Samantha", email:"Nathan@yesenia.net"}];
      constructor(private _todoservice : CalculServiceService) { }

    verifier(username : any)
    {
    //  this.serverName = username;
     // this.nom = this.value;
      let x = this._todoservice.getNumberOf(this.listUsers,"username",username );
      //this.message = "le nombre d'utilisateur ayant un username  "+valeur+" est égal à "+this.x

      console.log(this.x);
    }

    ngOnInit(): void
    {
      //console.log(this._todoservice.getNumberOf(this.Todolist,"completed", true));
      this.x = this._todoservice.getNumberOf(this.listUsers,"username", this.valeur);
    }
  

}


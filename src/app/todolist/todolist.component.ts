import { Component, OnInit } from '@angular/core';
import {Todo} from 'src/app/model/todo';
import { CalculServiceService } from 'src/app/service/calcul-service.service';
import { TodoserviceService } from '../service/todoservice.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

//TodoArray : Todo[] = [];
//tableTodo = TodoArray;
listTodo = [] as  any;

public number = [] ;
public x : number; 
public y : number; 
public z : number; 
public m: number; 
public message : any;
public total: any;
  Todolist=[
  
    {"userId": 1, "id": 1, "title": "delectus aut autem", "completed":false},
    {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false},
    {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false},
    {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab","completed": true}];
 
 

  constructor(private _todoservice : CalculServiceService,
    private _todofromhttp : TodoserviceService) { }
  
  completedJob()
  {
   // console.log(this.x);
   this.total=this.z;
   this.m = this.x;
   this.message = "le nombre de to do completed est égal à "+this.m+" par rapport au total des todo "+this.total
  }

  ngOnInit(): void
   {
     //console.log(this._todoservice.getNumberOf(this.Todolist,"completed", true));
     this.x = this._todoservice.getNumberOf(this.Todolist,"completed", true);
     this.y =this._todoservice.getNumberOf(this.Todolist,"completed", false);
     this.z = this.x + this.y;
   // return getNumberOf (this.Todolist[],"completed", "false" );
   this._todofromhttp.getTodo().subscribe(data=> this.listTodo = data);
  }

}

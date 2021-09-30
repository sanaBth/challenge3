import { Component, OnInit } from '@angular/core';
import {Todo} from 'src/app/model/todo';
import { CalculServiceService } from '../calcul-service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

//TodoArray : Todo[] = [];
//tableTodo = TodoArray;
public number = [] ;
  Todolist=[
  
    {"userId": 1, "id": 1, "title": "delectus aut autem", "completed":false},
    {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false},
    {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false},
    {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab","completed": true}];
 
 

  constructor(private _todoservice : CalculServiceService) { }
  
 

  ngOnInit(): void
   {
   // return getNumberOf (this.Todolist[],"completed", "false" );
  }

}

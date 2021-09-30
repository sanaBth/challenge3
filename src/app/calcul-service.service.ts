import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {

  constructor() { }
  getNumberOf( list:any[], critiria:string, value:any)
  {
    let newList = [] 
   if(critiria == "title"){
  newList=  list.filter(todo=> todo.title == value)
   } 
   if (critiria == "completed"){
    newList = list.filter(todo=> todo.completed == value)
   }
   if (critiria == "userId"){
    newList = list.filter(todo=> todo.userId == value)
   }
   return newList.length
   
  }
 
}

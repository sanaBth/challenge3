import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {

  constructor() { }
  getNumberOf( list:any[], critiria:string, value:any)
  {
    
      //list.length;
  //console.log(list.length);
  return critiria == value;
    
   
  }
 
}

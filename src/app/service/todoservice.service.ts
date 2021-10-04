import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  private _url:string = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http:HttpClient) { }

  getTodo():Observable<Todo[]>{
    return this.http.get<Todo[]>(this._url);
  }
  getUsersId(id : any){
    return this.http.get<Todo[]>(this._url+"/"+id)
    /*.pipe(
      map((items: Array<Todo>) => {
        return items.find((item: Todo) => {
          return item.id === id;
        });
      })
    ); */
  }
}

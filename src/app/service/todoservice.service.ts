import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  private _url:string = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http:HttpClient) { }

  getTodo():Observable<Todo[]>{
    return this.http.get<Todo[]>(this._url);
  }
 /* getUsersId(id : any){
    return this.http.get<Utilisateur[]>('assets/data.json')
    .pipe(
      map((items: Array<Utilisateur>) => {
        return items.find((item: Utilisateur) => {
          return item.id === id;
        });
      })
    );
  }*/
}

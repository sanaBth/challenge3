import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userId:any;
  id : any;
  private _url:string = "https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }

  getUsers():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this._url);
  }
  getUsersId(id : any){
    return this.http.get<Utilisateur[]>('assets/data.json')
    .pipe(
      map((items: Array<Utilisateur>) => {
        return items.find((item: Utilisateur) => {
          return item.id === id;
        });
      })
    );
  }
 }


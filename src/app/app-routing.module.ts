import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailSalleComponent } from './detail-salle/detail-salle.component';
import { ErrorsComponentComponent } from './errors-component/errors-component.component';
import { Path1Component } from './path1/path1.component';
import { Path2Component } from './path2/path2.component';
import { SalleLisrComponent } from './salle-lisr/salle-lisr.component';
import { TodolistComponent } from './todolist/todolist.component';
import { UsersComponentComponent } from './users-component/users-component.component';


const routes: Routes = [
  {path:'',component: AppComponent},
  {path:'path1', component:Path1Component},
  {path:'path2',component:Path2Component},
  {path:'404',component:ErrorsComponentComponent},
  
  {path:'TodoList',component:TodolistComponent},
  {path:'UserList',component:UsersComponentComponent},
  {path:'salles',component:SalleLisrComponent},
  {path:'salles/:id',component:DetailSalleComponent},
  {path:'**',component:ErrorsComponentComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutes = [Path1Component,Path2Component,SalleLisrComponent,DetailSalleComponent]
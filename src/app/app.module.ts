import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule,appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { BooksComponent } from './books/books.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormulaireChall5Component } from './formulaire-chall5/formulaire-chall5.component';
import { Challenge6Component } from './challenge6/challenge6.component';
import { TableauComponent } from './challenge6/tableau/tableau.component';
import { Form6Component } from './challenge6/form6/form6.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CalculServiceService } from 'src/app/service/calcul-service.service';
import { UsersComponentComponent } from './users-component/users-component.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Path2Component } from './path2/path2.component';
import { Path1Component } from './path1/path1.component';
import { ErrorsComponentComponent } from './errors-component/errors-component.component';
import { SalleLisrComponent } from './salle-lisr/salle-lisr.component';
import { DetailSalleComponent } from './detail-salle/detail-salle.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    FormComponent,
    BooksComponent,
    BooksDetailComponent,
  
    FormulaireChall5Component,
       Challenge6Component,
       TableauComponent,
       Form6Component,
       TodolistComponent,
       UsersComponentComponent,
       appRoutes,
       ErrorsComponentComponent,
       SalleLisrComponent,
       DetailSalleComponent,
       DetailTodoComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    HttpClientModule,
 

  ],
  providers: [CalculServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

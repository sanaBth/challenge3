import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }
  book : any


  
  books=[
    {name:"book1", author:"wiliam",date:"13/22/55"},
    {name:"book2", author:"newName",date:"13/22/55"},
    {name:"book3", author:"newName2",date:"13/22/55"},
  ]
  ngOnInit(): void {
  }

  detail(book:any){
    this.book= book
  }
}

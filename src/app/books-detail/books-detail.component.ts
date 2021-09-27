import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {

  constructor() { }
  @Input() childData: any;

  ngOnInit(): void {
  }

}

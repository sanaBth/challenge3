import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoserviceService } from '../service/todoservice.service';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent implements OnInit {
public detailTodo:any;
  constructor(private route:ActivatedRoute,private _todofromhttp : TodoserviceService) { }

  ngOnInit(): void 
  {
    const id =  this.route.snapshot.paramMap.get('id');
   
    this._todofromhttp.getUsersId(id).subscribe(data=> this.detailTodo = data);
   
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-salle',
  templateUrl: './detail-salle.component.html',
  styleUrls: ['./detail-salle.component.css']
})
export class DetailSalleComponent implements OnInit {
public salleId :any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   /* let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.salleId=id;*/
  }

}

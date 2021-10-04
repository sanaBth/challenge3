import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Salle } from '../model/salle';

@Component({
  selector: 'app-detail-salle',
  templateUrl: './detail-salle.component.html',
  styleUrls: ['./detail-salle.component.css']
})
export class DetailSalleComponent implements OnInit {
  salles:Salle[] = [
    {id:1,nom:'éléctro mecanique', capacite:30},
    {id:2,nom:'Genie civile', capacite:50},
    {id:3,nom:'IOT', capacite:100},
    {id:4,nom:'Informatique mecanique', capacite:10},
    {id:5,nom:'BI', capacite:50},
    ]
public salleId :any;


public detail:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   const id =  this.route.snapshot.paramMap.get('id');
    //console.log(this.route.snapshot.paramMap.get('id'));
    //console.log(this.salles.filter(salle=>salle.id==parseInt(id!)))
    this.detail=this.salles.filter(salle=>salle.id==parseInt(id!))[0]
     //this.DetailSalle(id);
  }
  DetailSalle(id : any)
  {
  this.salles.forEach(salle => {
    if(salle.id==id){
      this.detail=salle
    }
  });
  
}





}

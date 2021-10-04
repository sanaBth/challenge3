import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from '../model/salle';

@Component({
  selector: 'app-salle-lisr',
  templateUrl: './salle-lisr.component.html',
  styleUrls: ['./salle-lisr.component.css']
})
export class SalleLisrComponent implements OnInit {
  salles:Salle[] = [
    {id:1,nom:'éléctro mecanique', capacite:30},
    {id:2,nom:'Genie civile', capacite:50},
    {id:3,nom:'IOT', capacite:100},
    {id:4,nom:'Informatique mecanique', capacite:10},
    {id:5,nom:'BI', capacite:50},
    ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(salle:any)
  {
    this.router.navigate(['/salles',salle.id]);
  }

}

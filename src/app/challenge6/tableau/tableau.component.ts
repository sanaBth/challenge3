import { Component,Input, OnInit } from '@angular/core';
class Person
{
  nom : string;
  prenom : string;
  
  constructor ( nom : string,  prenom : string)
  {
    this.nom = nom;
    this.prenom = prenom;
    
  }
}

const PersonArray : Person[] = [
  {nom:"", prenom:""},
]
@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  tablePerson = PersonArray;
  insertPerson : Person ={ nom:"", prenom:""};
 
  DisplayData (event:any)
  {
  this.insertPerson= event; 
   this.tablePerson.push(this.insertPerson);

  
   console.log(event);
  }
  constructor() { }
  
  ngOnInit(): void {
  }

}

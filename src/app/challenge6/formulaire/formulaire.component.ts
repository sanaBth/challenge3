import { Component, OnInit } from '@angular/core';
import {  FormGroup , FormControl, Validators, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  profileForm = new FormGroup({
    nom: new FormControl('',Validators.required),
    prenom: new FormControl('',Validators.required),
   
  },

  )
  constructor() { }

  ngOnInit(): void {
  }

}

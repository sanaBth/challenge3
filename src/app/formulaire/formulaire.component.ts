import { Component, OnInit , Input, Output, EventEmitter  } from '@angular/core';

import {  FormGroup , FormControl} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  profileForm = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    email : new FormControl(),
    password : new FormControl(),
    confirmpassword : new FormControl(),
  
  });
  Add() {
   // console.log(this.profileForm.value);
   this.profileForm.value
  }
  constructor() { }

  ngOnInit(): void {
  }

}

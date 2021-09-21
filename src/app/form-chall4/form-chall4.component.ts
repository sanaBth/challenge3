import { Component, OnInit } from '@angular/core';
import {  FormGroup , FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-form-chall4',
  templateUrl: './form-chall4.component.html',
  styleUrls: ['./form-chall4.component.css']
})
export class FormChall4Component implements OnInit {
  profileForm = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    email : new FormControl(),
    password : new FormControl(),
    confirmpassword : new FormControl(),
  
  });
  Add() {
    console.log(this.profileForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

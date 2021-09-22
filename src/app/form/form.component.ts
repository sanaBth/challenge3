import { Component, OnInit } from '@angular/core';
import {  FormGroup , FormControl, Validators, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  profileForm = new FormGroup({
    nom: new FormControl('',Validators.required),
    prenom: new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required]),
    confirmpassword : new FormControl('',[Validators.required]),
  },
  this.passwordConfirming
  )

  passwordConfirming(c: AbstractControl): any{
    if (c.get('password')?.value !== c.get('confirmpassword')?.value) {
        return {invalid: true};
    }
}
get nom()
{
  return this.profileForm.get('nom');
}
get prenom()
{
  return this.profileForm.get('prenom');
}
get email()
{
  return this.profileForm.get('email');
}
get password()
{
  return this.profileForm.get('password');
}
get confirmpassword()
{
  return this.profileForm.get('confirmpassword');
} 
 
  Add() {
    console.log(this.profileForm);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {  FormGroup , FormControl, Validators} from '@angular/forms';

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
    password : new FormControl('',[Validators.required, this.passwordsMatch]),
    confirmpassword : new FormControl('',[Validators.required, this.passwordsMatch]),
  
  })


  passwordsMatch(control)
  {
   if (control.value != null)
   {
     var conpass=control.value;
     var pass = control.root.password;
     if (pass)
     {
       var passw = pass.value;
       if (conpass!== "" && passw !=="")
       {
         if (conpass!== passw )
         {
           return {passwordValidity:true}
         }
       }
       else
       {
         return null
       }
     }
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
    console.log(this.profileForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

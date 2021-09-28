import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {  FormGroup , FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-form6',
  templateUrl: './form6.component.html',
  styleUrls: ['./form6.component.css']
})
export class Form6Component implements OnInit {


  @Output() afficherData = new EventEmitter<any>();

 

  profileForm = new FormGroup({
    nom: new FormControl('',Validators.required),
    prenom: new FormControl('',Validators.required),

  },
  
  )
  public afficheForm(profileForm: any): void 
  {
  this.afficherData.emit(profileForm.value);
    //console.log(profileForm.value);
}

  

  
  constructor() { }

  ngOnInit(): void {
  }

}

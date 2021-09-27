import { Component, OnInit } from '@angular/core';
import {  FormGroup ,  Validators, AbstractControl, FormGroupDirective, NgForm} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-formulaire-chall5',
  templateUrl: './formulaire-chall5.component.html',
  styleUrls: ['./formulaire-chall5.component.css']
})
export class FormulaireChall5Component implements OnInit {
 /* emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);*/

  
  profileForm = new FormGroup({
    nomFormControl: new FormControl('',Validators.required),
    prenomFormControl: new FormControl('',Validators.required),
    emailFormControl : new FormControl('',[Validators.required, Validators.email]),
    passwordFormControl: new FormControl('',[Validators.required]),
    confirmpassword : new FormControl('',[Validators.required]),
  },
  this.passwordConfirming
  )
  passwordConfirming(c: AbstractControl): any{
    if (c.get('password')?.value !== c.get('confirmpassword')?.value) {
        return {invalid: true};
    }
  }

///
selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillCtrl = new FormControl();
  filtredskills: Observable<string[]>;
  skills: string[] = ['angular'];
  allskills: string[] = ['angular','html', 'css'];

  @ViewChild('skillINput') skillINput: ElementRef<HTMLInputElement>;

  constructor() {
    this.filtredskills = this.skillCtrl.valueChanges.pipe(
        startWith(null),
        map((skill: string | null) => skill ? this._filter(skill) : this.allskills.slice()));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our skill
    if (value) {
      this.skills.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.skillCtrl.setValue(null);
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.skills.push(event.option.viewValue);
    this.skillINput.nativeElement.value = '';
    this.skillCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allskills.filter(skill => skill.toLowerCase().includes(filterValue));
  }



///

  Add() {
    console.log(this.profileForm);
  }
  

  ngOnInit(): void {
  }

}

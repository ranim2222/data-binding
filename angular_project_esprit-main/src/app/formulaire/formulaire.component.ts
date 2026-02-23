import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  email = new FormControl('');
  pwd = new FormControl('');
  save(){
  console.log(this.email.value);
  console.log(this.pwd.value);
  }
}

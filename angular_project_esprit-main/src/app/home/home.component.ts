import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title: string = 'Welcome to the Home Page';

  save(){
    alert('Data saved successfully!');
  }

  color: string = 'red';
}

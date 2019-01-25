import { Component } from '@angular/core';
import { Statistics } from './stats';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'itmarket-app';
  stats: Statistics[]
  }


  


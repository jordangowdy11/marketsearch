import { Component } from '@angular/core';
import { HTTPService } from './http.service';
import {Statistics} from './stats'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'itmarket-app';
  stats: Statistics[]
  constructor(private prjsvc:HTTPService){

  }

  }


  


  


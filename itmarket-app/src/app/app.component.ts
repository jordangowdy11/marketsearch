import { Component } from '@angular/core';
import { HTTPService } from './http.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'itmarket-app';
  constructor(private prjsvc:HTTPService){

  }

  }


  


  


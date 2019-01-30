import { Component } from '@angular/core';
// import { HTTPService } from './http.service';
import { RouterOutlet } from '../../node_modules/@angular/router';
import { slideInAnimation } from './animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'itmarket-app';

  // constructor(private prjsvc:HTTPService){

  // }
  constructor(){
    
  }

 
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  }


  


  


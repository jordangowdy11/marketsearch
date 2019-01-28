import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { JavaScript } from './java-script';
// import { Observable } from 'rxjs';
// import { Statistics } from "./stats";
@Injectable({
  providedIn: 'root'
})
export class JavaScriptService {

   rootURL:string
  
   constructor(private httpsvc:HttpClient){
      this.rootURL="http://localhost:3900/"
  }

  getJavaScript(language:string):Observable<JavaScript[]>{
    return this.httpsvc.get<JavaScript[]>(
      this.rootURL+"list/:javascript")
    
  }

// getStatisticList(language:string):Observable<Statistics[]>{
//   return this.httpsvc.get<Statistics[]>(
//       this.rootURL+"list/"+language)
// }
}
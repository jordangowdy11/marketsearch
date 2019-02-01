import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { Permanent } from 'src/app/permanent';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermDataService {

  rootURL: string;
  //updateURL: string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL ="http://localhost:3400/language_data/mongoquery/"
    //this.updateURL ="http://localhost:3400/language_data/mongoquery/last_update"
   }

   //this is the base format for the data request, just replicate this for every language
   getPermDocumentData(getParam):Observable<Permanent[]>{
     return this.httpsvc.get<Permanent[]>(this.rootURL + getParam )
   }

  //  getLastUpdate():Observable<Permanent[]>{
  //   return this.httpsvc.get<Permanent[]>(this.updateURL)
  // }
   

   


}

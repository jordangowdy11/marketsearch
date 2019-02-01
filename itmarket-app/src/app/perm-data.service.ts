import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { Permanent } from 'src/app/permanent';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermDataService {

  rootURL: string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL ="http://localhost:3400/language_data/mongoquery/"
   }

   //this is the base format for the data request, just replicate this for every language
   getPermDocumentData(getParam):Observable<Permanent[]>{
     return this.httpsvc.get<Permanent[]>(this.rootURL + getParam )
   }
}

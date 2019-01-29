import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Permanent } from './permanent';

@Injectable({
  providedIn: 'root'
})
export class PermanentDataService {

  rootURL: string;
  pythonURL:string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL ="http://localhost:8080/language_data"
    this.pythonURL = "http://localhost:8080/language_data/python"
   }

   //this is the base format for the data request, just replicate this for every language
   getDocumentData():Observable<Permanent[]>{
    //  return this.httpsvc.get<Permanent[]>(this.rootURL+"/javascript")
    return this.httpsvc.get<Permanent[]>(this.rootURL)
  }

  getPythonData():Observable<Permanent[]>{
    return this.httpsvc.get<Permanent[]>(this.pythonURL)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statistics } from "./stats";
@Injectable({
  providedIn: 'root'
})
export class SqlService{

  rootURL:string
  
  constructor(private httpsvc:HttpClient){
      this.rootURL="http://localhost:3990/"
  }

getStatisticList(language:string):Observable<Statistics[]>{
  return this.httpsvc.get<Statistics[]>(
      this.rootURL+"list/"+language)
}
}

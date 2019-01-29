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
  javaURL:string;
  htmlURL:string;
  sqlURL:string;
  javascriptURL:string;
  csharpURL:string;
  msURL:string;
  scrumURL:string;
  devopsURL:string;
  awsURL:string;




  constructor(private httpsvc: HttpClient) {
    this.rootURL ="http://localhost:8080/language_data"
    this.pythonURL = "http://localhost:8080/language_data/python"
    this.sqlURL ="http://localhost:8080/language_data/sql"
    this.javaURL="http://localhost:8080/language_data/java"
    this.htmlURL="http://localhost:8080/language_data/html"
    this.javascriptURL="http://localhost:8080/language_data/javascript"
    this.csharpURL="http://localhost:8080/language_data/csharp"
    this.msURL="http://localhost:8080/language_data/microsoft"
    this.scrumURL="http://localhost:8080/language_data/scrum"
    this.devopsURL="http://localhost:8080/language_data/devops"
    this.awsURL="http://localhost:8080/language_data/amazon_aws"
  
   }

   //this is the base format for the data request, just replicate this for every language
   getDocumentData():Observable<Permanent[]>{
    //  return this.httpsvc.get<Permanent[]>(this.rootURL+"/javascript")
    return this.httpsvc.get<Permanent[]>(this.rootURL)
  }

  getPythonData():Observable<Permanent[]>{
    return this.httpsvc.get<Permanent[]>(this.pythonURL)
  }
  
  getSqlData():Observable<Permanent[]>{
    return this.httpsvc.get<Permanent[]>(this.sqlURL)
  }
  
  getJavaData():Observable<Permanent[]>{
    return this.httpsvc.get<Permanent[]>(this.javaURL)
  }
  
  getHtmlData():Observable<Permanent[]>{
    return this.httpsvc.get<Permanent[]>(this.htmlURL)
  }
  
  getJavascriptData():Observable<Permanent[]>{
    return this.httpsvc.get<Permanent[]>(this.javascriptURL)
  }
  getCsharpData():Observable<Permanent[]>{
    return this.httpsvc.get<Permanent[]>(this.csharpURL)
  }

  getMicrosoftData():Observable<Permanent[]>{
    return this.httpsvc.get<Permanent[]>(this.msURL)
  }

  getScrumData():Observable<Permanent[]>{
    return this.httpsvc.get<Permanent[]>(this.scrumURL)
  }

  getDevopsData():Observable<Permanent[]>{
    return this.httpsvc.get<Permanent[]>(this.devopsURL)
  }

  getAwsData():Observable<Permanent[]>{
    return this.httpsvc.get<Permanent[]>(this.awsURL)
  }




}

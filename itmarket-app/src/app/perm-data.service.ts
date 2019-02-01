import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { Permanent } from 'src/app/permanent';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermDataService {

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
    this.rootURL ="http://localhost:3400/language_data/mongoquery/"
   }

   //this is the base format for the data request, just replicate this for every language

   getPermDocumentData(getParam):Observable<Permanent[]>{
     return this.httpsvc.get<Permanent[]>(this.rootURL + getParam )
   }
  //  getDocumentData():Observable<Permanent[]>{
  //   //  return this.httpsvc.get<Permanent[]>(this.rootURL+"/javascript")
  //   return this.httpsvc.get<Permanent[]>(this.rootURL)
  // }

  // getPythonData():Observable<Permanent[]>{
  //   return this.httpsvc.get<Permanent[]>(this.pythonURL)
  // }
  
  // getSqlData():Observable<Permanent[]>{
  //   return this.httpsvc.get<Permanent[]>(this.sqlURL)
  // }
  
  // getJavaData():Observable<Permanent[]>{
  //   return this.httpsvc.get<Permanent[]>(this.javaURL)
  // }
  
  // getHtmlData():Observable<Permanent[]>{
  //   return this.httpsvc.get<Permanent[]>(this.htmlURL)
  // }
  
  // getJavascriptData():Observable<Permanent[]>{
  //   return this.httpsvc.get<Permanent[]>(this.javascriptURL)
  // }
  // getCsharpData():Observable<Permanent[]>{
  //   return this.httpsvc.get<Permanent[]>(this.csharpURL)
  // }

  // getMicrosoftData():Observable<Permanent[]>{
  //   return this.httpsvc.get<Permanent[]>(this.msURL)
  // }

  // getScrumData():Observable<Permanent[]>{
  //   return this.httpsvc.get<Permanent[]>(this.scrumURL)
  // }

  // getDevopsData():Observable<Permanent[]>{
  //   return this.httpsvc.get<Permanent[]>(this.devopsURL)
  // }

  // getAwsData():Observable<Permanent[]>{
  //   return this.httpsvc.get<Permanent[]>(this.awsURL)
  // }
}

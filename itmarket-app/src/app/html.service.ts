import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlService{

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/htmlservices"
  }
    getHtmlServices():Observable<HtmlService[]> {
      return this.httpsvc.get<HtmlService[]>(this.rootURL+"/list") 
    }

    addNewHtmlService(newHtmlService:HtmlService):Observable<HtmlService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
 
     return this.httpsvc.post<HtmlService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deleteHtmlService(productId:number):Observable<HtmlService>{
       return this.httpsvc.request<HtmlService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}

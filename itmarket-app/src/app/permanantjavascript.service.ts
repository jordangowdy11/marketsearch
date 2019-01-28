import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermanantjavascriptService {

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/PermanantjavascriptService"
  }
    getPermanantjavascriptServices():Observable<PermanantjavascriptService[]> {
      return this.httpsvc.get<PermanantjavascriptService[]>(this.rootURL+"/list") 
    }

    addNewPermanantjavascriptService(newPermanantjavascriptService:PermanantjavascriptService):Observable<PermanantjavascriptService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
     
 
     return this.httpsvc.post<PermanantjavascriptService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deletePermanantjavascriptService(productId:number):Observable<PermanantjavascriptService>{
       return this.httpsvc.request<PermanantjavascriptService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}

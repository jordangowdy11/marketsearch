import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class MicrosoftService{

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/MicrosoftServices"
  }
    getMicrosoftServices():Observable<MicrosoftService[]> {
      return this.httpsvc.get<MicrosoftService[]>(this.rootURL+"/list") 
    }

    addNewMicrosoftService(newMicrosoftService:MicrosoftService):Observable<MicrosoftService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
 
     return this.httpsvc.post<MicrosoftService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deleteProduct(productId:number):Observable<MicrosoftService>{
       return this.httpsvc.request<MicrosoftService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}

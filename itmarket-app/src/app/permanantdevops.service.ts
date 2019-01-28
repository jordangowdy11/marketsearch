import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermanantdevopsService {

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/PermanantdevopsService"
  }
    getPermanantdevopsServices():Observable<PermanantdevopsService[]> {
      return this.httpsvc.get<PermanantdevopsService[]>(this.rootURL+"/list") 
    }

    addNewPermanantdevopsService(newPermanantdevopsService:PermanantdevopsService):Observable<PermanantdevopsService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
 
     return this.httpsvc.post<PermanantdevopsService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deletePermanantdevopsService(productId:number):Observable<PermanantdevopsService>{
       return this.httpsvc.request<PermanantdevopsService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PermanantpythonService{

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/PermanantpythonService"
  }
    getPermanantpythonServices():Observable<PermanantpythonService[]> {
      return this.httpsvc.get<PermanantpythonService[]>(this.rootURL+"/list") 
    }

    addNewPermanantpythonService(newPermanantpythonService:PermanantpythonService):Observable<PermanantpythonService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }

 
     return this.httpsvc.post<PermanantpythonService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deleteProduct(productId:number):Observable<PermanantpythonService>{
       return this.httpsvc.request<PermanantpythonService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}
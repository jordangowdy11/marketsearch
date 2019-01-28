import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PermanantcsharpService{

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/PermanantcsharpServices"
  }
    getPermanantcsharpServices():Observable<PermanantcsharpService[]> {
      return this.httpsvc.get<PermanantcsharpService[]>(this.rootURL+"/list") 
    }

    addNewPermanantcsharpService(newPermanantcsharpService:PermanantcsharpService):Observable<PermanantcsharpService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }

 
     return this.httpsvc.post<PermanantcsharpService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deletePermanantcsharpService(productId:number):Observable<PermanantcsharpService>{
       return this.httpsvc.request<PermanantcsharpService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}

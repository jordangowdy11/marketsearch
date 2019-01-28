import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermanantjavaService{

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/permanantjavaservices"
  }
    getPermanantjavaServices():Observable<PermanantjavaService[]> {
      return this.httpsvc.get<PermanantjavaService[]>(this.rootURL+"/list") 
    }

    addNewPermanantjavaService(newPermanantjavaService:PermanantjavaService):Observable<PermanantjavaService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
 
     return this.httpsvc.post<PermanantjavaService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deletePermanantjavaService(productId:number):Observable<PermanantjavaService>{
       return this.httpsvc.request<PermanantjavaService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}
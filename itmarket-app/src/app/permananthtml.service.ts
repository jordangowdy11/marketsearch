import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})


export class PermananthtmlService {

  rootURL=""
  constructor(private httpsvc:HttpClient) { 
    this.rootURL="http://localhost:9000/permananthtmlts"
  }
  getPermananthtmls():Observable<Permananthtml[]> {
    return this.httpsvc.get<Permananthtml[]>(this.rootURL+"/listPermananthtml") 
  }

  addNewPermananthtml(newPermananthtml:Permananthtml):Observable<Permananthtml>{
    const httpOpts ={
   headers: new HttpHeaders(
     {'Content-Type':
     'application/x-www-form-urlencoded;charset=UTF-8'})
   }
   var reqBody="name="+newPermananthtml.name+"&price="+newPermananthtml.unitPrice

   return this.httpsvc.post<Permananthtml>(
     this.rootURL+"/register",reqBody,httpOpts)
   }

   deleteProduct(productId:number):Observable<Permananthtml>{
     return this.httpsvc.request<Permananthtml>('DELETE',this.rootURL+"/delete",
    {
      headers:new HttpHeaders({'Content-Type': 'text/plain'}),
  body:productId
      })
   }
}

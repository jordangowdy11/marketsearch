import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PermanantawsService {

    rootURL=""
    constructor(private httpsvc:HttpClient) { 
      this.rootURL="http://localhost:9000/permanantawshtmlts"
    }
    getPermanantawss():Observable<Permanantaws[]> {
      return this.httpsvc.get<Permanantaws[]>(this.rootURL+"/listPermanantaws") 
    }
  
    addNewPermanantaws(newPermanantaws:Permanantaws):Observable<Permanantaws>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
     var reqBody="name="+newPermanantaws.name+"&price="+newPermanantaws.unitPrice
  
     return this.httpsvc.post<Permanantaws>(
       this.rootURL+"/register",reqBody,httpOpts)
     }
  
     deletePermanantaws(productId:number):Observable<Permanantaws>{
       return this.httpsvc.request<Permanantaws>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}

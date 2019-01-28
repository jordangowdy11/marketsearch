import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermanantmicrosoftService{

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/Permanantmicrosoft"
  }
    getPermanantmicrosofts():Observable<Permanantmicrosoft[]> {
      return this.httpsvc.get<Permanantmicrosoft[]>(this.rootURL+"/list") 
    }

    addNewPermanantmicrosoft(newProduct:Permanantmicrosoft):Observable<Permanantmicrosoft>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
     var reqBody="name="+newProduct.name+"&price="+newProduct.unitPrice
 
     return this.httpsvc.post<Permanantmicrosoft>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deletePermanantmicrosoft(productId:number):Observable<Permanantmicrosoft>{
       return this.httpsvc.request<Permanantmicrosoft>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}

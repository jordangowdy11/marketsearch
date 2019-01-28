import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CSharpService{

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/products"
  }
    getCSharpServices():Observable<CSharpService[]> {
      return this.httpsvc.get<CSharpService[]>(this.rootURL+"/list") 
    }

    addNewCSharpService(newCSharpService:CSharpService):Observable<CSharpService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
 
     return this.httpsvc.post<CSharpService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deleteCSharpService(productId:number):Observable<CSharpService>{
       return this.httpsvc.request<CSharpService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}

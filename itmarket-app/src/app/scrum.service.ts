import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrumService{

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/products"
  }
    getScrumServices():Observable<ScrumService[]> {
      return this.httpsvc.get<ScrumService[]>(this.rootURL+"/list") 
    }

    addNewScrumService(newScrumService:ScrumService):Observable<ScrumService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
 
     return this.httpsvc.post<ScrumService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deleteScrumService(productId:number):Observable<Product>{
       return this.httpsvc.request<ScrumService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevopsService{

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/products"
  }
    getDevopsServices():Observable<DevopsService[]> {
      return this.httpsvc.get<DevopsService[]>(this.rootURL+"/list") 
    }

    addNewDevopsService(newDevopsService:DevopsService):Observable<DevopsService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
 
     return this.httpsvc.post<DevopsService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deleteProduct(productId:number):Observable<DevopsService>{
       return this.httpsvc.request<DevopsService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}

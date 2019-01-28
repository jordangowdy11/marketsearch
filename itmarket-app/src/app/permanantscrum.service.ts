import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class PermanantscrumService{

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/PermanantscrumServices"
  }
    getPermanantscrumServices():Observable<PermanantscrumService[]> {
      return this.httpsvc.get<PermanantscrumService[]>(this.rootURL+"/list") 
    }

    addNewPermanantscrumService(newPermanantscrumService:PermanantscrumService):Observable<PermanantscrumService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
 
     return this.httpsvc.post<PermanantscrumService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deletePermanantscrumService(productId:number):Observable<PermanantscrumService>{
       return this.httpsvc.request<PermanantscrumService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}

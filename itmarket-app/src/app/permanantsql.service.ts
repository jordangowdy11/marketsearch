import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class PermanantsqlService{

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/permanantsqlservices"
  }
    getPermanantsqlServices():Observable<PermanantsqlService[]> {
      return this.httpsvc.get<PermanantsqlService[]>(this.rootURL+"/list") 
    }

    addNewPermanantsqlService(newPermanantsqlService:PermanantsqlService):Observable<PermanantsqlService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
 
     return this.httpsvc.post<PermanantsqlService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deletePermanantsqlService(productId:number):Observable<PermanantsqlService>{
       return this.httpsvc.request<PermanantsqlService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}

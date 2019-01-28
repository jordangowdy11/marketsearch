import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class SqlService{

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/sqlservice"
  }
    getSqlServices():Observable<SqlService[]> {
      return this.httpsvc.get<SqlService[]>(this.rootURL+"/list") 
    }

    addNewSqlService(newSqlService:SqlService):Observable<SqlService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
 
     return this.httpsvc.post<SqlService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deleteSqlService(productId:number):Observable<SqlService>{
       return this.httpsvc.request<SqlService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}

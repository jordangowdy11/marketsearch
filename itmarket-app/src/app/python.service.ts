import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class PythonService{

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/pythonservices"
  }
    getPythonServices():Observable<PythonService[]> {
      return this.httpsvc.get<PythonService[]>(this.rootURL+"/list") 
    }

    addNewPythonService(newPythonService:PythonService):Observable<PythonService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
     
 
     return this.httpsvc.post<PythonService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deletePythonService(productId:number):Observable<PythonService>{
       return this.httpsvc.request<PythonService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JavaScriptService {

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/javascriptservices"
  }
    getJavaScriptServices():Observable<JavaScriptService[]> {
      return this.httpsvc.get<JavaScriptService[]>(this.rootURL+"/list") 
    }

    addNewJavaScriptService(newJavaScriptService:JavaScriptService):JavaScriptService<JavaScriptService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
 
     return this.httpsvc.post<JavaScriptService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deleteProduct(productId:number):Observable<JavaScriptService>{
       return this.httpsvc.request<JavaScriptService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}
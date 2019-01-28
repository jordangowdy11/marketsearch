import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AwsService{

  rootURL=""
  constructor(private httpsvc:HttpClient) {
    this.rootURL="http://localhost:9900/AwsServices"
  }
    getAwsServices():Observable<AwsService[]> {
      return this.httpsvc.get<AwsService[]>(this.rootURL+"/list") 
    }

    addNewAwsService(newAwsService:AwsService):Observable<AwsService>{
      const httpOpts ={
     headers: new HttpHeaders(
       {'Content-Type':
       'application/x-www-form-urlencoded;charset=UTF-8'})
     }
 
     return this.httpsvc.post<AwsService>(
       this.rootURL+"/register",reqBody,httpOpts)
     }

     deleteAwsService(productId:number):Observable<AwsService>{
       return this.httpsvc.request<AwsService>('DELETE',this.rootURL+"/delete",
      {
        headers:new HttpHeaders({'Content-Type': 'text/plain'}),
    body:productId
        })
     }
}
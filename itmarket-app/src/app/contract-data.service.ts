import { Injectable } from '@angular/core';
import { Contract } from '../app/contract';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractDataService {

  rootURL: string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = "http://localhost:3400/language_data/mongoquery/"
  }
  
    getContractDocumentData(getParam):Observable<Contract[]>{
    return this.httpsvc.get<Contract[]>(this.rootURL + getParam )
  }
}
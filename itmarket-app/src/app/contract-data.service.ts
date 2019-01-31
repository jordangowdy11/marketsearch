import { Injectable } from '@angular/core';
import { Contract } from '../app/contract';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractDataService {

  rootURL: string;
  contpythonURL: string;
  contjavaURL: string;
  conthtmlURL: string;
  contsqlURL: string;
  contjavascriptURL: string;
  contcsharpURL: string;
  contmsURL: string;
  contscrumURL: string;
  contdevopsURL: string;
  contawsURL: string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = "http://localhost:8080/language_data"
    this.contpythonURL = "http://localhost:8080/language_data/cont_python"
    this.contsqlURL = "http://localhost:8080/language_data/cont_sql"
    this.contjavaURL = "http://localhost:8080/language_data/cont_java"
    this.conthtmlURL = "http://localhost:8080/language_data/cont_html"
    this.contjavascriptURL = "http://localhost:8080/language_data/cont_javascript"
    this.contcsharpURL = "http://localhost:8080/language_data/cont_csharp"
    this.contmsURL = "http://localhost:8080/language_data/cont_microsoft"
    this.contscrumURL = "http://localhost:8080/language_data/cont_scrum"
    this.contdevopsURL = "http://localhost:8080/language_data/cont_devops"
    this.contawsURL = "http://localhost:8080/language_data/cont_amazon_aws"
  }

  getContractDocumentData(): Observable<Contract[]> {
    //  return this.httpsvc.get<Contract[]>(this.rootURL+"/javascript")
    return this.httpsvc.get<Contract[]>(this.rootURL)
  }

 
  getContPythonData(): Observable<Contract[]> {
    return this.httpsvc.get<Contract[]>(this.contpythonURL)
  }

  getContSqlData(): Observable<Contract[]> {
    return this.httpsvc.get<Contract[]>(this.contsqlURL)
  }

  getContJavaData(): Observable<Contract[]> {
    return this.httpsvc.get<Contract[]>(this.contjavaURL)
  }

  getContHtmlData(): Observable<Contract[]> {
    return this.httpsvc.get<Contract[]>(this.conthtmlURL)
  }

  getContJavascriptData(): Observable<Contract[]> {
    return this.httpsvc.get<Contract[]>(this.contjavascriptURL)
  }
  getContCsharpData(): Observable<Contract[]> {
    return this.httpsvc.get<Contract[]>(this.contcsharpURL)
  }

  getContMicrosoftData(): Observable<Contract[]> {
    return this.httpsvc.get<Contract[]>(this.contmsURL)
  }

  getContScrumData(): Observable<Contract[]> {
    return this.httpsvc.get<Contract[]>(this.contscrumURL)
  }

  getContDevopsData(): Observable<Contract[]> {
    return this.httpsvc.get<Contract[]>(this.contdevopsURL)
  }

  getContAwsData(): Observable<Contract[]> {
    return this.httpsvc.get<Contract[]>(this.contawsURL)
  }


}

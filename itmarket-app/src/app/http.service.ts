import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { JavaScript } from './java-script';

@Injectable({
    providedIn: 'root'
})
export class HTTPService{
    rootURL:string
    
    constructor(private httpsvc:HttpClient){
        this.rootURL="http://localhost:3990/"
    }

    get(language:string):Observable<JavaScript[]>{
    return this.httpsvc.get<JavaScript[]>(
        this.rootURL+"list/:"+language)
}
}

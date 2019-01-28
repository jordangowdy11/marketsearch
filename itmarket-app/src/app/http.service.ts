import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { JavaScript } from './java-script';
=======
import { HttpClient} from '@angular/common/http';
import { Statistics } from "./stats";
import { Observable } from 'rxjs';
>>>>>>> 9add8cc1c1a41d027ae2f76475962f7f638107c5

@Injectable({
    providedIn: 'root'
})
export class HTTPService{
    rootURL:string
    
    constructor(private httpsvc:HttpClient){
        this.rootURL="http://localhost:3990/"
    }

getJavaScript(language:string):Observable<JavaScript[]>{
    return this.httpsvc.get<JavaScript[]>(
        this.rootURL+"list/"+language)
}
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Statistics } from "./stats";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HTTPService{
    rootURL:string
    
    constructor(private httpsvc:HttpClient){
        this.rootURL="http://localhost:3990/"
    }

getStatisticList(language:string):Observable<Statistics[]>{
    return this.httpsvc.get<Statistics[]>(
        this.rootURL+"list/"+language)
}
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) { }
  getStories():Observable<any>{
    
   return this.http.get<any>(`https://`)
  }  
  getAction():Observable<any>{
    
    return this.http.get<any>(`https://`)
   }  
  getFantasy():Observable<any>{
    
    return this.http.get<any>(`https://`)
   }  
  getScifi():Observable<any>{
    
    return this.http.get<any>(`https://`)
   }      
}

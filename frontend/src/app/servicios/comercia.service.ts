import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComerciaService {

  urlApiRest:string="https://localhost:43555/api/Comercia";
  
  constructor(private http:HttpClient) { }
  
  listarComercia():Observable<any> {
    return this.http.get(this.urlApiRest);
  }
}
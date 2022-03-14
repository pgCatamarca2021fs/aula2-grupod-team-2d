import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperaCriptoService {

  urlApiRest:string="https://localhost:43555/api/OperaCripto";

  constructor(private http:HttpClient) { }
  
  listarOperaCripto():Observable<any> {
    return this.http.get(this.urlApiRest);
  }
}

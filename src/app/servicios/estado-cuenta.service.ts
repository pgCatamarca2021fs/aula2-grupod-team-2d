import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoCuentaService {

  urlApiRest:string="https://localhost:43555/api/EstadoCuenta";

  constructor(private http:HttpClient) { }

  listarEstadoCuenta():Observable<any> {
    return this.http.get(this.urlApiRest);
  }
  
}

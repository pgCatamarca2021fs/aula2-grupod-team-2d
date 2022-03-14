import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentaPesoService {

  urlApiRest:string="https://localhost:43555/api/CuentaPeso";

  constructor(private http:HttpClient) { }

  listarCuentaPeso():Observable<any> {
    return this.http.get(this.urlApiRest);
  }
}

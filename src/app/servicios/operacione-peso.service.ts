import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperacionePesoService {

  urlApiRest:string="https://localhost:43555/api/OperacionePeso";

  constructor(private http:HttpClient) { }

  listarOperacionePeso():Observable<any> {
    return this.http.get(this.urlApiRest);
  }
}

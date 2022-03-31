import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CriptoMonedaService {

  urlApiRest:string="http://cataexchange.somee.com/backend/api/CriptoMoneda";
  
  constructor(private http:HttpClient) { }
  
  listarCriptoMoneda():Observable<any> {
    return this.http.get(this.urlApiRest);
  }
}

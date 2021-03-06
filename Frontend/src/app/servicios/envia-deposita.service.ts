import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnviaDepositaService {

  urlApiRest:string="http://cataexchange.somee.com/backend/api/EnviaDeposita";

  constructor(private http:HttpClient) { }

  listarEnviaDeposita():Observable<any> {
    return this.http.get(this.urlApiRest);
  }
}

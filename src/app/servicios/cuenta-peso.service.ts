import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentaPesoService {

  urlApiRest:string="http://cataexchange.somee.com/backend/api/cuentapeso";

  constructor(private http:HttpClient) { }

  listarCuentaPeso():Observable<any> {
    return this.http.get(this.urlApiRest);
  }

  cargarPesos(saldo: any, id: any){
      return this.http.put(this.urlApiRest + "/"+id, saldo);
  }
}

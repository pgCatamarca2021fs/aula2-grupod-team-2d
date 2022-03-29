import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BilleterasService {

  urlApiRest:string="http://cataexchange.somee.com/backend/api/Billetera";
  // urlApiRest:string="https://localhost:44302/api/Billetera";
  
  constructor(private http:HttpClient) { }

  listarBilletera():Observable<any> {
    return this.http.get(this.urlApiRest);
  }

  crearBilletera(formulario: any,):any{
      
      return this.http.post(this.urlApiRest, formulario)
  }

  actualizarBilletera(formulario: any, id: number, nombreCripto: string):any{
      
      return this.http.put(this.urlApiRest +`/${id}?nombreMoneda=${ nombreCripto }`, formulario)
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BilleterasService {

  urlApiRest:string="https://localhost:43555/api/Billetera";
  
  constructor(private http:HttpClient) { }

  listarBilletera():Observable<any> {
    return this.http.get(this.urlApiRest);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlApiRest:string="https://localhost:43555/api/Usuario";

  constructor(private http:HttpClient) {

   }

   listarUsuario():Observable<any> {
     return this.http.get(this.urlApiRest);
   }
}

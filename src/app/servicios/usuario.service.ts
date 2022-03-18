import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlApiRest:string="http://cataexchange.somee.com/backend/api/Usuario";

  constructor(private http:HttpClient) {

   }

   listarUsuario():Observable<any> {
     return this.http.get(this.urlApiRest);
   }

   crearUsuario(objDatos: any): Observable<any> {
       return this.http.post(this.urlApiRest, objDatos);
   }

   modificarUsuario(objModify: any):Observable<any> {
     return this.http.put(this.urlApiRest, objModify);
   }

   eliminarUsuario(objDelete: any):Observable<any> {
     return this.http.delete(this.urlApiRest, objDelete);
   }
}

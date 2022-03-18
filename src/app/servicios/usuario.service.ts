import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlApiRest:string="http://cataexchange.somee.com/backend/api/";

  constructor(private http:HttpClient) {

   }

   listarUsuario():Observable<any> {
     return this.http.get(this.urlApiRest + "Usuario");
   }

   crearUsuario(objDatos: any): Observable<any> {
     return this.http.post(this.urlApiRest + "Usuario", objDatos);
   }

   modificarUsuario(objModify: any):Observable<any> {
     return this.http.put(this.urlApiRest + "modificarUsuario", objModify);
   }

   eliminarUsuario(objDelete: any):Observable<any> {
     return this.http.delete(this.urlApiRest + "eliminarUsuario", objDelete);
   }
}

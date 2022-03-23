import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario, UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApiRest:string="http://cataexchange.somee.com/backend/api/account";
  // urlApiRest:string="https://localhost:44302/api/account";
  currentUserSubject: BehaviorSubject<any>;
  currentUser: Observable<any>;
    loggedIn: any;

  constructor(private http:HttpClient,
              usuarioService: UsuarioService,
              private route: Router,
             ) {
      console.log("servicio de autenticacion esta corriendo");
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  login(usuario: any):Observable<any>{
      return this.http.post<any>(this.urlApiRest, usuario)
      /* .pipe(map(data => { */
          /* localStorage.setItem('currentUser', JSON.stringify(data)); */
          /* this.currentUserSubject.next(data); */
          /* this.loggedIn.next(true); */
          /* return data; */
      /* })) */
  }


  logout(): void {
      localStorage.removeItem('token');
      localStorage.removeItem('Email')
      localStorage.removeItem('idUsuario')
      this.route.navigate(['../'])
  }
  get usuarioAutenticado(): any {
      return this.currentUserSubject.value;
  }

  /* get estaAutenticado(): Observable<boolean>{ */
      /* return this.loggedIn.asObservable(); */
  /* } */

 get estaAutenticado(){
     if (localStorage.getItem('token')){
         return true;
     }
     return false
  }

  getToken(){
      return localStorage.getItem('token');
  }
}

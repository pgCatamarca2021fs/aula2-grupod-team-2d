import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario, UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApiRest:string="http://cataexchange.somee.com/backend/api/Usuario/GetLogin";
  currentUserSubject: BehaviorSubject<any>;
  currentUser: Observable<any>;
    loggedIn: any;

  constructor(private http:HttpClient, usuarioService: UsuarioService) {
      console.log("servicio de autenticacion esta corriendo");
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  login(usuario: any):Observable<any>{
      return this.http.post<any>(this.urlApiRest, usuario)
      .pipe(map(data => {
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.currentUserSubject.next(data);
          this.loggedIn.next(true);
          return data;
      }))
  }

  logout(): void {
      localStorage.removeItem('currentUser');
      this.loggedIn.next(false);
  }
  get usuarioAutenticado(): any {
      return this.currentUserSubject.value;
  }

  get estaAutenticado(): Observable<boolean>{
      return this.loggedIn.asObservable();
  }
}

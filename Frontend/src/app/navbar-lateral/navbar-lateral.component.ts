import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth/auth.service';

@Component({
  selector: 'app-navbar-lateral',
  templateUrl: './navbar-lateral.component.html',
  styleUrls: ['./navbar-lateral.component.css']
})
export class NavbarLateralComponent implements OnInit {

    constructor(
        private authService: AuthService,
    ){}



  show = true;
  body = "";
  menu__side = "";
  estado1 = true;
  estado2 = false;
  clases = {
    'body_move menu__side_move ': true
  }

  openMenu() {
    this.body = "body_move";
    this.menu__side = "menu__side_move";
  }

  closeMenu() {
    this.body = "";
    this.menu__side = "";
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
      console.log("desde cerrar sesion");
      return this.authService.logout();
  }

}

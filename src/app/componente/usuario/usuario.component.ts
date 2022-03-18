import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario:any;
  constructor(private miServicio:UsuarioService) { }

  ngOnInit(): void {
    this.miServicio.listarUsuario().subscribe(data => {
      this.usuario=data;
    })

    this.miServicio.modificarUsuario()subscribe(data => {
      this.usuario=data;
    })

    this.miServicio.eliminarUsuario()subscribe(data => {
      this.usuario=data;
    })
  }

}

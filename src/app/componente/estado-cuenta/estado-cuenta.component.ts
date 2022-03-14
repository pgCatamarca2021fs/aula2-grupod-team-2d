import { Component, OnInit } from '@angular/core';
import { EstadoCuentaService } from 'src/app/servicios/estado-cuenta.service';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.css']
})
export class EstadoCuentaComponent implements OnInit {

  estadoCuenta:any;

  constructor(private miServicio:EstadoCuentaService) { }

  ngOnInit(): void {
    this.miServicio.listarEstadoCuenta().subscribe(data => {
      this.estadoCuenta=data;
    })
  }

}

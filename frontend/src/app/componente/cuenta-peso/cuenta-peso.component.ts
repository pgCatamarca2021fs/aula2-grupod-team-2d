import { Component, OnInit } from '@angular/core';
import { CuentaPesoService } from 'src/app/servicios/cuenta-peso.service';

@Component({
  selector: 'app-cuenta-peso',
  templateUrl: './cuenta-peso.component.html',
  styleUrls: ['./cuenta-peso.component.css']
})
export class CuentaPesoComponent implements OnInit {

  cuentaPeso:any;

  constructor(private miServicio:CuentaPesoService) { }

  ngOnInit(): void {
    this.miServicio.listarCuentaPeso().subscribe(data => {
      this.cuentaPeso=data;
    })
  }

}

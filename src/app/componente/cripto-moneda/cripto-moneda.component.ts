import { Component, OnInit } from '@angular/core';
import { CriptoMonedaService } from 'src/app/servicios/cripto-moneda.service';

@Component({
  selector: 'app-cripto-moneda',
  templateUrl: './cripto-moneda.component.html',
  styleUrls: ['./cripto-moneda.component.css']
})
export class CriptoMonedaComponent implements OnInit {

  criptoMoneda:any;

  constructor(private miServicio:CriptoMonedaService) { }

  ngOnInit(): void {
    this.miServicio.listarCriptoMoneda().subscribe(data => {
      this.criptoMoneda=data;
    })
  }

}

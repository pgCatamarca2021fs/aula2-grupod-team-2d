import { Component, OnInit } from '@angular/core';
import { CoingeckoApiService } from '../servicios/coingecko-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    criptomonedas: any =[];

    constructor(private service: CoingeckoApiService){

    }

  precioPeso = 0;
  precioDolar = 0;
  monedaConver(precioPeso: number, precioDolar: number) {
    precioDolar = precioPeso * 210;
  }

  ngOnInit(): void {
      this.service.getAllCoins().subscribe(criptomonedas => {
          this.criptomonedas = criptomonedas;
          console.log(this.criptomonedas);
          console.log(criptomonedas[2].symbol)
      })
  }

}


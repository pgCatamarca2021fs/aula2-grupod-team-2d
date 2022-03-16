import { Component, OnInit } from '@angular/core';
import { CoingeckoApiService } from '../servicios/coingecko-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    criptomonedas: any =[];
    precioBitcoin: string = "";

    rounded = (number:number) => {
        return Math.round(number);
    }

    constructor(private service: CoingeckoApiService){

    }
    
// caluculadora dolar blue
  precioPeso = 0;
  precioDolar = 0;
  monedaConver(precioPeso: number, precioDolar: number) {
    precioDolar = precioPeso * 210;
  }

  ngOnInit(): void {
      this.service.getAllCoins().subscribe(criptomonedas => {
          this.criptomonedas = criptomonedas;

            // INDICE PARA PROBAR CADA ARREGLO
          console.log(this.criptomonedas);

          // GUARDO VALORES NECESARIOS PARA SU POSTERIOR USO EJEM: PRECIO BITCOIN
          this.precioBitcoin = criptomonedas[0].current_price;
          // console.log(this.precioBitcoin)
          console.log(criptomonedas[2].symbol)
          
          console.log(criptomonedas[0].price_change_percentage_24h);
      })

      
  }

}

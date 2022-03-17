import { Component, OnInit } from '@angular/core';
import { CoingeckoApiService } from '../servicios/coingecko-api.service';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css']
})
export class SwapComponent implements OnInit {

  criptomonedas: any =[];


  formatoPrecio = (price: number) => {
    let opDivisa = { style: 'currency', currency: 'ARS' };
    let formatNum = new Intl.NumberFormat('us-US', opDivisa);
    return formatNum.format(price)
  }
 


  
  precioPeso = 0;
  precioDolar = 0;
  monedaConver(precioPeso: number, precioDolar:number) {
    precioDolar = precioPeso * 210;
}

  

  constructor(private service: CoingeckoApiService){

    }

    ngOnInit(): void {
      this.service.getAllCoins().subscribe(criptomonedas => {
          this.criptomonedas = criptomonedas;

          this.criptomonedas;
            // INDICE PARA PROBAR CADA ARREGLO
          console.log(this.criptomonedas);

          // GUARDO VALORES NECESARIOS PARA SU POSTERIOR USO EJEM: PRECIO BITCOIN
          // this.precioBitcoin = criptomonedas[0].current_price;
          // console.log(this.precioBitcoin)
          console.log(criptomonedas[2].symbol)
          
      })

      
  }
}

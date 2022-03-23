import { Component, OnInit } from '@angular/core';
import { CoingeckoApiService } from '../servicios/coingecko-api.service';
import { CuentaPesoService } from '../servicios/cuenta-peso.service';



@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css']
})
export class SwapComponent implements OnInit {

      datosUsuarios: any = "";
      criptomonedas: any =[];
      // VARIABLES CON EL PRECIO DE LAS CRIPTO EN TIEMPO REAL
      precioUsdt :any = "";
      precioBtc :any = "";
      precioEth :any = "";
      precioBnb :any = "";
      precioAda :any = "";
      precioSol :any = "";
      precioDot :any = "";
      precioDoge :any = "";
      precioDai :any = "";
      precioSlp :any = "";


    // VARIABLES DE LOS PI

    listarCuentaPeso: any=[];
    precioprueba: number = -1;
  

    // VARIABLES PARA COMPRAR 
    cantidadPeso: number = 0;
    totalUsdt:any = 0;

    // VARIABLES PARA INTERCAMBIAR
    tengo: string = 'ARS';
    quiero:string = 'BTC' ;
    fiat: string[] = ['ARS','BTC', 'ETH', 'USDT', 'BNB', 'ADA', 'SOL', 'DOT', 'DOGE', 'DAI', 'SLP'];
    crypto: string[] = ['ARS','BTC', 'ETH', 'USDT', 'BNB', 'ADA', 'SOL', 'DOT', 'DOGE', 'DAI', 'SLP'];
    quiero1:string = 'DAI';
    cantidad: number = 0;
    cantidad1: number = 0;
    cantidadUsdt: number = 0;
    total: any = 0;
    total1: any = 0;

  formatoPrecio = (price: number) => {
    let opDivisa = { style: 'currency', currency: 'ARS' };
    let formatNum = new Intl.NumberFormat('us-US', opDivisa);
    return formatNum.format(price)
  }



 
  convertirCripto() {
    switch (this.tengo) {
      case 'ARS':
        if (this.quiero === 'BTC') {
          this.total = this.cantidad / this.precioBtc;
        }
        if (this.quiero === 'ETH') {
          this.total = this.cantidad / this.precioEth;
        }
        if (this.quiero === 'USDT') {
          this.total = this.cantidad / this.precioUsdt;
        }
        if (this.quiero === 'BNB') {
          this.total = this.cantidad / this.precioBnb;
        }
        if (this.quiero === 'ADA') {
          this.total = this.cantidad / this.precioAda;
        }
        if (this.quiero === 'SOL') {
          this.total = this.cantidad / this.precioAda;
        }
        if (this.quiero === 'DOT') {
          this.total = this.cantidad / this.precioAda;
        }
        if (this.quiero === 'DOGE') {
          this.total = this.cantidad / this.precioAda;
        }
        if (this.quiero === 'DAI') {
          this.total = this.cantidad / this.precioAda;
        }
        if (this.quiero === 'SLP') {
          this.total = this.cantidad / this.precioAda;
        }
        break;


        case 'BTC':
        if (this.quiero === 'ARS') {
          this.total =  this.cantidad * this.precioBtc;
        }
        if (this.quiero === 'ETH') {
          this.total =  (this.precioBtc * this.cantidad) * 1 / this.precioEth;
        }
        if (this.quiero === 'USDT') {
          this.total =  (this.precioBtc * this.cantidad) * 1 / this.precioUsdt;
        }
        if (this.quiero === 'BNB') {
          this.total =  (this.precioBtc * this.cantidad) * 1 / this.precioBnb;
        }
        if (this.quiero === 'ADA') {
          this.total =  (this.precioBtc * this.cantidad) * 1 / this.precioAda;
        }
        if (this.quiero === 'SOL') {
          this.total =  (this.precioBtc * this.cantidad) * 1 / this.precioSol;
        }
        if (this.quiero === 'DOT') {
          this.total =  (this.precioBtc * this.cantidad) * 1 / this.precioDot;
        }
        if (this.quiero === 'DOGE') {
          this.total =  (this.precioBtc * this.cantidad) * 1 / this.precioDoge;
        }
        if (this.quiero === 'DAI') {
          this.total =  (this.precioBtc * this.cantidad) * 1 / this.precioDai;
        }
        if (this.quiero === 'SLP') {
          this.total =  (this.precioBtc * this.cantidad) * 1 / this.precioSlp;
        }

        break;

        case 'ETH':
        if (this.quiero === 'ARS') {
          this.total =  this.cantidad * this.precioEth;
        }
        if (this.quiero === 'BTC') {
          this.total =  (this.precioEth * this.cantidad) * 1 / this.precioBtc;
        }
        if (this.quiero === 'USDT') {
          this.total =  (this.precioEth * this.cantidad) * 1 / this.precioUsdt;
        }
        if (this.quiero === 'BNB') {
          this.total =  (this.precioEth * this.cantidad) * 1 / this.precioBnb;
        }
        if (this.quiero === 'ADA') {
          this.total =  (this.precioEth * this.cantidad) * 1 / this.precioAda;
        }
        if (this.quiero === 'SOL') {
          this.total =  (this.precioEth* this.cantidad) * 1 / this.precioSol;
        }
        if (this.quiero === 'DOT') {
          this.total =  (this.precioEth* this.cantidad) * 1 / this.precioDot;
        }
        if (this.quiero === 'DOGE') {
          this.total =  (this.precioEth* this.cantidad) * 1 / this.precioDoge;
        }
        if (this.quiero === 'DAI') {
          this.total =  (this.precioEth* this.cantidad) * 1 / this.precioDai;
        }
        if (this.quiero === 'SLP') {
          this.total =  (this.precioEth* this.cantidad) * 1 / this.precioSlp;
        }

        break;

        case 'BNB':
        if (this.quiero === 'ARS') {
          this.total =  this.cantidad * this.precioBnb;
        }
        if (this.quiero === 'BTC') {
          this.total =  (this.precioBnb * this.cantidad) * 1 / this.precioBtc;
        }
        if (this.quiero === 'USDT') {
          this.total =  (this.precioBnb * this.cantidad) * 1 / this.precioUsdt;
        }
        if (this.quiero === 'ETH') {
          this.total =  (this.precioBnb * this.cantidad) * 1 / this.precioEth;
        }
        if (this.quiero === 'ADA') {
          this.total =  (this.precioBnb * this.cantidad) * 1 / this.precioAda;
        }
        if (this.quiero === 'SOL') {
          this.total =  (this.precioBnb* this.cantidad) * 1 / this.precioSol;
        }
        if (this.quiero === 'DOT') {
          this.total =  (this.precioBnb* this.cantidad) * 1 / this.precioDot;
        }
        if (this.quiero === 'DOGE') {
          this.total =  (this.precioBnb* this.cantidad) * 1 / this.precioDoge;
        }
        if (this.quiero === 'DAI') {
          this.total =  (this.precioBnb* this.cantidad) * 1 / this.precioDai;
        }
        if (this.quiero === 'SLP') {
          this.total =  (this.precioBnb* this.cantidad) * 1 / this.precioSlp;
        }

        break;

        case 'ADA':
        if (this.quiero === 'ARS') {
          this.total =  this.cantidad * this.precioAda;
        }
        if (this.quiero === 'BTC') {
          this.total =  (this.precioAda * this.cantidad) * 1 / this.precioBtc;
        }
        if (this.quiero === 'USDT') {
          this.total =  (this.precioAda * this.cantidad) * 1 / this.precioUsdt;
        }
        if (this.quiero === 'ETH') {
          this.total =  (this.precioAda * this.cantidad) * 1 / this.precioEth;
        }
        if (this.quiero === 'BNB') {
          this.total =  (this.precioAda * this.cantidad) * 1 / this.precioBnb;
        }
        if (this.quiero === 'SOL') {
          this.total =  (this.precioAda* this.cantidad) * 1 / this.precioSol;
        }
        if (this.quiero === 'DOT') {
          this.total =  (this.precioAda* this.cantidad) * 1 / this.precioDot;
        }
        if (this.quiero === 'DOGE') {
          this.total =  (this.precioAda* this.cantidad) * 1 / this.precioDoge;
        }
        if (this.quiero === 'DAI') {
          this.total =  (this.precioAda* this.cantidad) * 1 / this.precioDai;
        }
        if (this.quiero === 'SLP') {
          this.total =  (this.precioAda* this.cantidad) * 1 / this.precioSlp;
        }

        break;

        case 'SOL':
        if (this.quiero === 'ARS') {
          this.total =  this.cantidad * this.precioSol;
        }
        if (this.quiero === 'BTC') {
          this.total =  (this.precioSol * this.cantidad) * 1 / this.precioBtc;
        }
        if (this.quiero === 'USDT') {
          this.total =  (this.precioSol * this.cantidad) * 1 / this.precioUsdt;
        }
        if (this.quiero === 'ETH') {
          this.total =  (this.precioSol * this.cantidad) * 1 / this.precioEth;
        }
        if (this.quiero === 'BNB') {
          this.total =  (this.precioSol * this.cantidad) * 1 / this.precioBnb;
        }
        if (this.quiero === 'ADA') {
          this.total =  (this.precioSol* this.cantidad) * 1 / this.precioAda;
        }
        if (this.quiero === 'DOT') {
          this.total =  (this.precioSol* this.cantidad) * 1 / this.precioDot;
        }
        if (this.quiero === 'DOGE') {
          this.total =  (this.precioSol* this.cantidad) * 1 / this.precioDoge;
        }
        if (this.quiero === 'DAI') {
          this.total =  (this.precioSol* this.cantidad) * 1 / this.precioDai;
        }
        if (this.quiero === 'SLP') {
          this.total =  (this.precioSol* this.cantidad) * 1 / this.precioSlp;
        }

        break;

        case 'DOT':
        if (this.quiero === 'ARS') {
          this.total =  this.cantidad * this.precioDot;
        }
        if (this.quiero === 'BTC') {
          this.total =  (this.precioDot * this.cantidad) * 1 / this.precioBtc;
        }
        if (this.quiero === 'USDT') {
          this.total =  (this.precioDot * this.cantidad) * 1 / this.precioUsdt;
        }
        if (this.quiero === 'ETH') {
          this.total =  (this.precioDot * this.cantidad) * 1 / this.precioEth;
        }
        if (this.quiero === 'BNB') {
          this.total =  (this.precioDot * this.cantidad) * 1 / this.precioBnb;
        }
        if (this.quiero === 'ADA') {
          this.total =  (this.precioDot* this.cantidad) * 1 / this.precioAda;
        }
        if (this.quiero === 'SOL') {
          this.total =  (this.precioDot* this.cantidad) * 1 / this.precioSol;
        }
        if (this.quiero === 'DOGE') {
          this.total =  (this.precioDot* this.cantidad) * 1 / this.precioDoge;
        }
        if (this.quiero === 'DAI') {
          this.total =  (this.precioDot* this.cantidad) * 1 / this.precioDai;
        }
        if (this.quiero === 'SLP') {
          this.total =  (this.precioDot* this.cantidad) * 1 / this.precioSlp;
        }

        break;

        case 'DOGE':
        if (this.quiero === 'ARS') {
          this.total =  this.cantidad * this.precioDoge;
        }
        if (this.quiero === 'BTC') {
          this.total =  (this.precioDoge * this.cantidad) * 1 / this.precioBtc;
        }
        if (this.quiero === 'USDT') {
          this.total =  (this.precioDoge * this.cantidad) * 1 / this.precioUsdt;
        }
        if (this.quiero === 'ETH') {
          this.total =  (this.precioDoge * this.cantidad) * 1 / this.precioEth;
        }
        if (this.quiero === 'BNB') {
          this.total =  (this.precioDoge * this.cantidad) * 1 / this.precioBnb;
        }
        if (this.quiero === 'ADA') {
          this.total =  (this.precioDoge* this.cantidad) * 1 / this.precioAda;
        }
        if (this.quiero === 'SOL') {
          this.total =  (this.precioDoge* this.cantidad) * 1 / this.precioSol;
        }
        if (this.quiero === 'DOT') {
          this.total =  (this.precioDoge* this.cantidad) * 1 / this.precioDot;
        }
        if (this.quiero === 'DAI') {
          this.total =  (this.precioDoge* this.cantidad) * 1 / this.precioDai;
        }
        if (this.quiero === 'SLP') {
          this.total =  (this.precioDoge* this.cantidad) * 1 / this.precioSlp;
        }

        break;

        case 'DAI':
        if (this.quiero === 'ARS') {
          this.total =  this.cantidad * this.precioDai;
        }
        if (this.quiero === 'BTC') {
          this.total =  (this.precioDai * this.cantidad) * 1 / this.precioBtc;
        }
        if (this.quiero === 'USDT') {
          this.total =  (this.precioDai * this.cantidad) * 1 / this.precioUsdt;
        }
        if (this.quiero === 'ETH') {
          this.total =  (this.precioDai * this.cantidad) * 1 / this.precioEth;
        }
        if (this.quiero === 'BNB') {
          this.total =  (this.precioDai * this.cantidad) * 1 / this.precioBnb;
        }
        if (this.quiero === 'ADA') {
          this.total =  (this.precioDai* this.cantidad) * 1 / this.precioAda;
        }
        if (this.quiero === 'SOL') {
          this.total =  (this.precioDai* this.cantidad) * 1 / this.precioSol;
        }
        if (this.quiero === 'DOT') {
          this.total =  (this.precioDai* this.cantidad) * 1 / this.precioDot;
        }
        if (this.quiero === 'DOGE') {
          this.total =  (this.precioDai* this.cantidad) * 1 / this.precioDoge;
        }
        if (this.quiero === 'SLP') {
          this.total =  (this.precioDai* this.cantidad) * 1 / this.precioSlp;
        }

        break;

        case 'SLP':
        if (this.quiero === 'ARS') {
          this.total =  this.cantidad * this.precioSlp;
        }
        if (this.quiero === 'BTC') {
          this.total =  (this.precioSlp * this.cantidad) * 1 / this.precioBtc;
        }
        if (this.quiero === 'USDT') {
          this.total =  (this.precioSlp * this.cantidad) * 1 / this.precioUsdt;
        }
        if (this.quiero === 'ETH') {
          this.total =  (this.precioSlp * this.cantidad) * 1 / this.precioEth;
        }
        if (this.quiero === 'BNB') {
          this.total =  (this.precioSlp * this.cantidad) * 1 / this.precioBnb;
        }
        if (this.quiero === 'ADA') {
          this.total =  (this.precioSlp* this.cantidad) * 1 / this.precioAda;
        }
        if (this.quiero === 'SOL') {
          this.total =  (this.precioSlp* this.cantidad) * 1 / this.precioSol;
        }
        if (this.quiero === 'DOT') {
          this.total =  (this.precioSlp* this.cantidad) * 1 / this.precioDot;
        }
        if (this.quiero === 'DOGE') {
          this.total =  (this.precioSlp* this.cantidad) * 1 / this.precioDoge;
        }
        if (this.quiero === 'DAI') {
          this.total =  (this.precioSlp* this.cantidad) * 1 / this.precioDai;
        }

        break;
        
  
        // return (cotizacioncripto * cantidadCiptoACambiar) * 1 / cotizacionNuevaCripto

      case 'USDT':
        if (this.quiero === 'ARS') {
          this.total =  this.cantidad * this.precioUsdt;
        }
        if (this.quiero === 'BTC') {
          this.total =  (this.precioUsdt * this.cantidad) * 1 / this.precioBtc;
        }
        if (this.quiero === 'ETH') {
          this.total =  (this.precioUsdt * this.cantidad) * 1 / this.precioEth;
        }
        if (this.quiero === 'BNB') {
          this.total =  (this.precioUsdt * this.cantidad) * 1 / this.precioBnb;
        }
        if (this.quiero === 'ADA') {
          this.total =  (this.precioUsdt * this.cantidad) * 1 / this.precioAda;
        }
        if (this.quiero === 'SOL') {
          this.total =  (this.precioUsdt * this.cantidad) * 1 / this.precioSol;
        }
        if (this.quiero === 'DOT') {
          this.total =  (this.precioUsdt * this.cantidad) * 1 / this.precioDot;
        }
        if (this.quiero === 'DOGE') {
          this.total =  (this.precioUsdt * this.cantidad) * 1 / this.precioDoge;
        }
        if (this.quiero === 'DAI') {
          this.total =  (this.precioUsdt * this.cantidad) * 1 / this.precioDai;
        }
        if (this.quiero === 'SLP') {
          this.total =  (this.precioUsdt * this.cantidad) * 1 / this.precioSlp;
        }
        
    }
  }

  
  
  monedaConver(precioPeso: number, precioDolar:number) {
    precioDolar = precioPeso * 210;
}

  

  constructor(
      private service: CoingeckoApiService,
      private cuentaPeso: CuentaPesoService
  ){

    }

    ngOnInit(): void {

      this.service.getAllCoins().subscribe(criptomonedas => {
          this.criptomonedas = criptomonedas;
          this.precioBtc = criptomonedas[0].current_price;
          this.precioEth = criptomonedas[1].current_price;
          this.precioUsdt = criptomonedas[2].current_price;
          this.precioBnb = criptomonedas[3].current_price;
          this.precioAda = criptomonedas[4].current_price;
          this.precioSol= criptomonedas[5].current_price;
          this.precioDot = criptomonedas[6].current_price;
          this.precioDoge = criptomonedas[7].current_price;
          this.precioDai = criptomonedas[8].current_price;
          this.precioSlp = criptomonedas[9].current_price;

          this.criptomonedas;
            // INDICE PARA PROBAR CADA ARREGLO
          console.log(this.criptomonedas);

          // GUARDO VALORES NECESARIOS PARA SU POSTERIOR USO EJEM: PRECIO BITCOIN
          // this.precioBitcoin = criptomonedas[0].current_price;
          // console.log(this.precioBitcoin)
          console.log(this.precioUsdt)
          
      })

      this.cuentaPeso.listarCuentaPeso().subscribe(
            cuentasPesosUsuarios => {
                for (let datos of cuentasPesosUsuarios){
                    if (datos.idUsuario == localStorage.getItem('idUsuario')){
                        this.datosUsuarios = datos;
                        console.log(this.datosUsuarios)
                    }
                }
            }
        )

      
    }
    
    /* onCuentaPesos(): void{ */
        /* this.cuentaPeso.listarCuentaPeso().subscribe( */
        /*     pesos => { */
        /*         this.listarCuentaPeso = pesos; */
        /*         console.log(this.listarCuentaPeso) */
        /*     } */
        /* ) */
    /* } */

    onComprar(){


    }



}

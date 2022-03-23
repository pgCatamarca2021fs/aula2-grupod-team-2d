import { Component, OnInit } from '@angular/core';
import { CoingeckoApiService } from '../servicios/coingecko-api.service';
import { CuentaPesoService } from '../servicios/cuenta-peso.service';



@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css']
})
export class SwapComponent implements OnInit {


    // variables
  criptomonedas: any =[];
  listarCuentaPeso: any=[];
  precioprueba: number = -1;
  precioUsdt:any = "";
  datosUsuarios: any = "";

  formatoPrecio = (price: number) => {
    let opDivisa = { style: 'currency', currency: 'ARS' };
    let formatNum = new Intl.NumberFormat('ar-AR', opDivisa);
    return formatNum.format(price)
  }


  cotizacion=(precio: number) => {
    return precio / 200;
  }
 
  

  
  precioPeso = 0;
  precioDolar = 0;
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
          this.precioUsdt = criptomonedas[2].current_price;

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

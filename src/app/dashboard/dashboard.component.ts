import { Component, OnInit } from '@angular/core';
import {BilleterasService} from '../servicios/billeteras.service';
import { CoingeckoApiService } from '../servicios/coingecko-api.service';
import {UsuarioService} from '../servicios/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    criptomonedas: any =[];
    precioBitcoin: string = "";
    billeteraUsuario: any = [];

    crearCriptos: any = [
        
        {
          idUsuario: Number(localStorage.getItem('idUsuario')),
          clavePublica: "87ao6e5u876oa45ua4oe65",
          nombreCripto: "Bitcoin",
          cantidadCripto: 0,
          cotizacion: 0
        },        
        {
          idUsuario: Number(localStorage.getItem('idUsuario')),
          clavePublica: "87ao6e5u876oa45ua4oe65",
          nombreCripto: "Ethereum",
          cantidadCripto: 0,
          cotizacion: 0
        },        
        {
          idUsuario: Number(localStorage.getItem('idUsuario')),
          clavePublica: "87ao6e5u876oa45ua4oe65",
          nombreCripto: "Tether",
          cantidadCripto: 0,
          cotizacion: 0
        },        
        {
          idUsuario: Number(localStorage.getItem('idUsuario')),
          clavePublica: "87ao6e5u876oa45ua4oe65",
          nombreCripto: "Binancecoin",
          cantidadCripto: 0,
          cotizacion: 0
        },       
        {
          idUsuario: Number(localStorage.getItem('idUsuario')),
          clavePublica: "87ao6e5u876oa45ua4oe65",
          nombreCripto: "Cardano",
          cantidadCripto: 0,
          cotizacion: 0
        },       
        {
          idUsuario: Number(localStorage.getItem('idUsuario')),
          clavePublica: "87ao6e5u876oa45ua4oe65",
          nombreCripto: "Solana",
          cantidadCripto: 0,
          cotizacion: 0
        },       
        {
          idUsuario: Number(localStorage.getItem('idUsuario')),
          clavePublica: "87ao6e5u876oa45ua4oe65",
          nombreCripto: "Polkadot",
          cantidadCripto: 0,
          cotizacion: 0
        },        
        {
          idUsuario: Number(localStorage.getItem('idUsuario')),
          clavePublica: "87ao6e5u876oa45ua4oe65",
          nombreCripto: "Dogecoin",
          cantidadCripto: 0,
          cotizacion: 0
        },        
        {
          idUsuario: Number(localStorage.getItem('idUsuario')),
          clavePublica: "87ao6e5u876oa45ua4oe65",
          nombreCripto: "Dai",
          cantidadCripto: 0,
          cotizacion: 0
        },       
        {
          idUsuario: Number(localStorage.getItem('idUsuario')),
          clavePublica: "87ao6e5u876oa45ua4oe65",
          nombreCripto: "Smooth-love-potion",
          cantidadCripto: 0,
          cotizacion: 0
        },
    ]

    rounded = (number:number) => {
        return Math.round(number);
    }

    constructor(
        private service: CoingeckoApiService,
        private usuarioService: UsuarioService,
        private billeteraService: BilleterasService
    ){

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

// LISTAR USUARIO PARA EXTRAER EL ID
      this.usuarioService.listarUsuario().subscribe(
          usuarios => {
              for (let usuario of usuarios){
                  if (usuario.Email == localStorage.getItem('Email')){
                    localStorage.setItem('idUsuario', usuario.idUsuario)
                  }
              }

              // this.usuarios = usuarios;
          }
      );

      
// AGREGANDO CRIPTOMONEDAS A USUARIOS
    /*   if(this.billeteraUsuario){ */
/*  */
      /* } */
   /*  for(let criptoACrear of this.crearCriptos ){ */
        /* console.log(criptoACrear) */
        /* this.billeteraService.crearBilletera(criptoACrear).subscribe(); */
    /* } */

    this.billeteraService.listarBilletera().subscribe(
                billeteras => {
                    console.log(billeteras)
                }
            )
  }

}

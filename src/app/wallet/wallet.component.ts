import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { BilleterasService } from '../servicios/billeteras.service';
import { CuentaPesoService } from '../servicios/cuenta-peso.service';
import {Router} from '@angular/router';
import {CoingeckoApiService} from '../servicios/coingecko-api.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
    //----PROBANDO ENVIAR
   async onConfirmaT(event:any){
    event.preventDefault;
}

    billeteraUsuario: any = [];
    datosUsuarios: any = [];
    criptomonedas: any = [];

  divInicioSesion = "";
  divInicioSesion1 = "";
  
  iniciaPopup() {
    this.divInicioSesion = "active"
    this.divInicioSesion1 = "active"
  }

  cerrarPopup() {
    this.divInicioSesion = "divInicioSesion";
    this.divInicioSesion1 = "divInicioSesion1";
  }

  constructor(
    private formBuilder: FormBuilder,
    private billeteraService: BilleterasService,
    private cuentaPesoService: CuentaPesoService,
    private router: Router,
    private coingeckoApiService: CoingeckoApiService
  ) {
    this.buildForm();
   }

   formatoPrecio = (price: number) => {
    let opDivisa = { style: 'currency', currency: 'ARS' };
    let formatNum = new Intl.NumberFormat('us-US', opDivisa);
    return formatNum.format(price)
  }


   onEnviarCbu(event:Event){
    event.preventDefault;
    
    if(this.formCbu.valid){
      alert ("Enviar al servidor..")
    } else{
      this.formCbu.markAllAsTouched();
    }
    }

    // REGISTRO ===========================================
registroPopup() {
  this.divRegistro = "active"
  this.divRegistro1 = "active"
}
divRegistro= "";
divRegistro1= "";
cerrarPopup1() {
  this.divRegistro = "divRegistro";
  this.divRegistro1 = "divRegistro1";
}


formCbu: FormGroup = new FormGroup({}) ;


formDeposita: FormGroup = new FormGroup({}) ;

onDepositar(event:Event){
    event.preventDefault;

    let saldo = {
        saldo: this.datosUsuarios.saldo + this.formDeposita.controls["saldo"].value,
    }

if (this.formDeposita.valid){
  alert("Deposito exitoso");
}
    this.cuentaPesoService.cargarPesos(saldo, localStorage.getItem('idUsuario') ).subscribe()
    // console.log(console.log(saldo));
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(['../wallet']);
    });
    
   }

   get Saldo (){
       return this.formDeposita.get('saldo');
   }



  ngOnInit(): void {
      this.coingeckoApiService.getAllCoins().subscribe(
          coins => {
              this.criptomonedas = coins;
              console.log(this.criptomonedas);
          }
      )
      this.billeteraService.listarBilletera().subscribe(
          billeteraUsuario => {


              for (let billeteras of billeteraUsuario){
                  if (billeteras.idUsuario == localStorage.getItem('idUsuario')){
                      this.billeteraUsuario.push(billeteras);
                  }
              }
              console.log(this.billeteraUsuario);
          }
      )


      this.cuentaPesoService.listarCuentaPeso().subscribe(
            cuentasPesosUsuarios => {
                for (let datos of cuentasPesosUsuarios){
                    if (datos.idUsuario == localStorage.getItem('idUsuario')){
                        this.datosUsuarios = datos;
                        // console.log(this.datosUsuarios)
                    }
                }
            }
        )
  }

  private buildForm() {

    this.formCbu = this.formBuilder.group({

      cbu: ['', [Validators.required]],
      
    });

    this.formDeposita= this.formBuilder.group({
      saldo: ['',],
    });
    
  }

  get Cbu (){
    return this.formCbu.get('cbu');
  }
  
  get CbuValid(){
    return this.Cbu?.touched && !this.Cbu?.valid;
  }
}

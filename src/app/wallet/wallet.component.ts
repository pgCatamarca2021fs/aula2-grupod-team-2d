import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { BilleterasService } from '../servicios/billeteras.service';
import { CuentaPesoService } from '../servicios/cuenta-peso.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

    billeteraUsuario: any = [];

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
    private cuentaPesoService: CuentaPesoService
  ) {
    this.buildForm();
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
        saldo: "no tengo value jejeje"
    }

    /* this.cuentaPesoService.cargarPesos(saldo, localStorage.getItem('idUsuario')) */
    console.log(console.log(saldo));
    
   }

   get Saldo (){
       return this.formDeposita.get('saldo');
   }



  ngOnInit(): void {
      this.billeteraService.listarBilletera().subscribe(
          billeteraUsuario => {
              for (let billeteras of billeteraUsuario)
            this.billeteraUsuario = billeteraUsuario
            console.log(this.billeteraUsuario)
          }
      )
  }

  private buildForm() {

    this.formCbu = this.formBuilder.group({

      cbu: ['', [Validators.required]],
      
    });
    
  }

  get Cbu (){
    return this.formCbu.get('cbu');
  }
  
  get CbuValid(){
    return this.Cbu?.touched && !this.Cbu?.valid;
  }
}

import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

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
    private formBuilder: FormBuilder
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




  ngOnInit(): void {
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

import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  // btnIniciar = "";
  // popup = "";
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


  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }
  
  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({

      email: ['', [Validators.required, Validators.pattern((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/))]],
      contraseña: ['',[Validators.required]],
    });
}

get Email (){
return this.form.get('email');
}

get Contrasenia (){
return this.form.get('contraseña');
}


onEnviar(event:Event){
event.preventDefault;

if(this.form.valid){
  alert ("Enviar al servidor..")
} else{
  this.form.markAllAsTouched();
}
}

get EmailValid(){
return this.Email?.touched && !this.Email?.valid;
}

get ContraseniaValid(){
return this.Contrasenia?.touched && !this.Contrasenia?.valid;
}

}

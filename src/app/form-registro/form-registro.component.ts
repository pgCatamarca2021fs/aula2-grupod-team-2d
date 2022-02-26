import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

//import {MisValidaciones} from '../utils/mis-validaciones';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {
   // btnRegistro = "";
  // popup = "";
  divRegistro = "";
  divRegistro1 = "";
  
  registroPopup() {
    this.divRegistro = "active"
    this.divRegistro1 = "active"
  }

  cerrarPopup() {
    this.divRegistro = "divRegistro";
    this.divRegistro1 = "divRegistro1";
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

      nombre: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z]+$/)]],
      apellido: ['',[Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
      dni: ['',[Validators.required, Validators.pattern(/^\d[0-9]{18}$/)]], 
      fecha: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.pattern((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/))]],
      contraseña: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z0-9\_\-]+$/)]],
      contraseñaRepetida: ['', [Validators.required]], 
      terminosCondiciones: ['',[Validators.required]],
    });
    
  }

  get Edad (){
    return this.form.get('edad');
  }

get Nombre () {
  return this.form.get('nombre');
}

get Apellido (){
  return this.form.get('apellido');
}

get Dni (){
  return this.form.get('dni');
}

get Email (){
  return this.form.get('email');
}

get Contrasenia (){
  return this.form.get('contraseña');
}

get ContraseniaRepetida (){
  return this.form.get('contraseñaRepetida');
}

get TerminosCondiciones (){
  return this.form.get('terminosCondiciones');
}

get Fecha (){
  return this.form.get('fecha');
}


onEnviar(event:Event){
  event.preventDefault;

  if(this.form.valid){
    alert ("Enviar al servidor..")
  } else{
    this.form.markAllAsTouched();
  }
}

get NombreValid(){
  return this.Nombre?.touched && !this.Nombre?.valid;
}

get ApellidoValid(){
  return this.Apellido?.touched && !this.Apellido?.valid;
}

get DniValid(){
  return this.Dni?.touched && !this.Dni?.valid;
}

get EmailValid(){
  return this.Email?.touched && !this.Email?.valid;
}

get ContraseniaValid(){
  return this.Contrasenia?.touched && !this.Contrasenia?.valid;
}

get ContraseniaRepetidaValid(){
  return this.ContraseniaRepetida?.touched && !this.ContraseniaRepetida?.valid;
}

get FechaValid(){
  return this.Fecha?.touched && !this.Fecha?.valid;
}

get EdadValid(){
  return this.Edad?.touched && !this.Edad?.valid;
}
}




import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { ValidationErrors, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-main-index',
  templateUrl: './main-index.component.html',
  styleUrls: ['./main-index.component.css']
})
export class MainIndexComponent implements OnInit {
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



  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }
  
 

//   private buildForm() {
//     this.form = this.formBuilder.group({

//       email: ['', [Validators.required, Validators.pattern((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/))]],
//       contraseña: ['',[Validators.required]],
//     });
// }

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


  form: FormGroup = new FormGroup({}) ;

  
  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({

      nombre: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z]+$/)]],
      apellido: ['',[Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
      dni: ['',[Validators.required]], 
      fecha: ['', [Validators.required, this.isYoung()]],
      email: ['', [Validators.required, Validators.pattern((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/))]],
      contraseña: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z0-9\_\-]+$/)]],
      contraseñaRepetida: ['', [Validators.required, this.valContrasenias()]], 
      terminosCondiciones: ['',[Validators.required]],
    });
    
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

get ContraseniaRepetida (){
  return this.form.get('contraseñaRepetida');
}

get TerminosCondiciones (){
  return this.form.get('terminosCondiciones');
}

get Fecha (){
  return this.form.get('fecha');
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




get ContraseniaRepetidaValid(){
  return this.ContraseniaRepetida?.touched && !this.ContraseniaRepetida?.valid;
}

get FechaValid(){
  return this.Fecha?.touched && !this.Fecha?.valid;
}


  private valContrasenias (): ValidatorFn{
    return(): ValidationErrors | null =>{
      const contraseña: string = this.form.get('contraseña')?.value;
      const contraseñaRepetida: string = this.form.get('contraseñaRepetida')?.value;
      if(contraseña == contraseñaRepetida){
        return null;
      }
      return {valuesContrasenias: true}
    }
  }


  private isYoung (): ValidatorFn{
    return(): ValidationErrors | null => {
      const fechaCruda:string | undefined = this.form.get('fecha')?.value;
      const cumpleanosUsuario:Date = new Date(fechaCruda!);
      cumpleanosUsuario.setDate( cumpleanosUsuario.getDate() + 1 );

      const hoydia:Date = new Date();

      let edadUsuario = Math.abs(cumpleanosUsuario.getTime() - hoydia.getTime());
      edadUsuario = Math.round(edadUsuario/(1000 * 3600 * 24 * 365));
      if ( edadUsuario >= 18 ) {
        return null;
    }
    return { valuesIsYoung: true }
  }
}
}

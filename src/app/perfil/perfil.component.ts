import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { ValidationErrors, ValidatorFn } from '@angular/forms';
import { NgControl } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';
import {CuentaPesoService} from '../servicios/cuenta-peso.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: any = [];
  cuentaPesoUsuario: any = [];


  idUsuario: any = "";

  
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private cuentaPeso: CuentaPesoService
  ) { 
    this.buildForm();
  }

  formPerfil: FormGroup = new FormGroup({}) ;

  onEnviar(event:Event){
    event.preventDefault;
   
    
    
    if(this.formPerfil.valid){
      //this.usuarioService.crearUsuario(datosUsuarioObj).subscribe()
      //this.formPerfil.reset()
      alert ("Enviado con exito!");
      this.formPerfil.disable()
      
    } 
}

onModificar(event:Event){
  event.preventDefault;
 
  
  
  if(this.formPerfil.valid){
    //this.usuarioService.crearUsuario(datosUsuarioObj).subscribe()
    //this.formPerfil.reset()
    alert ("Enviado con exito!");
    this.formPerfil.enable()
    
  } 
}


  ngOnInit(): void {
      this.usuarioService.listarUsuario().subscribe(
          usuarios => {
              for (let usuario of usuarios){
                  if (usuario.Email == localStorage.getItem('Email')){
                    this.usuario = usuario;
                    this.idUsuario = usuario.idUsuario;
                    localStorage.setItem('idUsuario', usuario.idUsuario)
                    console.log(usuario);
                    console.log("idUsuario: " + this.idUsuario)
                  }
              }
              // this.usuarios = usuarios;
          }
      );

            
  }

    private buildForm() {
    this.formPerfil = this.formBuilder.group({

      nombre: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/)]],
      apellido: ['',[Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/)]],
      dni: ['',[Validators.required]], 
      fecha: ['', [Validators.required, this.isYoung()]],
      email: ['', [Validators.required, Validators.pattern((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/))]],
      contraseña: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z0-9\_\-]+$/)]],
      contraseñaRepetida: ['', [Validators.required, this.valContrasenias()]], 
      cbu: ['',[Validators.required]],
    });
  }


get Nombre () {
  return this.formPerfil.get('nombre');
}

get Apellido (){
  return this.formPerfil.get('apellido');
}

get Dni (){
  return this.formPerfil.get('dni');
}

get ContraseniaRepetida (){
  return this.formPerfil.get('contraseñaRepetida');
}


get Fecha (){
  return this.formPerfil.get('fecha');
}

get Email (){
  return this.formPerfil.get('email');
  }
  
  get Contrasenia (){
  return this.formPerfil.get('contraseña');
  }

get Cbu (){
  return this.formPerfil.get('cbu');
}

get CbuValid(){
  return this.Cbu?.touched && !this.Cbu?.valid;
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


  private valContrasenias (): ValidatorFn{
    return(): ValidationErrors | null =>{
      const contraseña: string = this.formPerfil.get('contraseña')?.value;
      const contraseñaRepetida: string = this.formPerfil.get('contraseñaRepetida')?.value;
      if(contraseña == contraseñaRepetida){
        return null;
      }
      return {valuesContrasenias: true}
    }
  }


  private isYoung (): ValidatorFn{
    return(): ValidationErrors | null => {
      const fechaCruda:string | undefined = this.formPerfil.get('fecha')?.value;
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

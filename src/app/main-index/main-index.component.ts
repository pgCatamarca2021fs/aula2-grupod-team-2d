import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { ValidationErrors, ValidatorFn } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';
import { AuthService } from '../servicios/auth/auth.service';
import { Router } from '@angular/router';
import {CuentaPesoService} from '../servicios/cuenta-peso.service';
import {BilleterasService} from '../servicios/billeteras.service';
import {CoingeckoApiService} from '../servicios/coingecko-api.service';
import {async} from 'rxjs';


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
  listarUsuarios: any = [];
  criptomonedas: any =[];

  iniciaPopup() {
    this.divInicioSesion = "active"
    this.divInicioSesion1 = "active"
  }

  cerrarPopup() {
    this.divInicioSesion = "divInicioSesion";
    this.divInicioSesion1 = "divInicioSesion1";
  }


  cargarDineroUsuarioNuevo(){
    // let ultimoUsuario = Math.max(...this.listarUsuarios);
    // console.log(ultimoUsuario);
  }


  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private router: Router,
    private cuentaPesosService: CuentaPesoService,
    private billeteraService: BilleterasService,
    private coniGeckoService: CoingeckoApiService

  ) {
    this.buildForm();
  }
  
 

 onEnviar(event:Event){
    event.preventDefault;
   
    
    // OBJETO DEL FORMULARIO
    let datosUsuarioObj = {
            Nombre: this.form.controls["nombre"].value,
            Apellido: this.form.controls["apellido"].value ,
            FechaNacimiento:this.form.controls["fecha"].value ,
            dni: this.form.controls["dni"].value ,
            Email:this.form.controls["email"].value ,
            Clave:this.form.controls["contraseña"].value 
    }

    
    if(this.form.valid){
        this.usuarioService.crearUsuario(datosUsuarioObj).subscribe(
            createUser => console.log(createUser)
        );
      this.form.reset();

      this.usuarioService.listarUsuario().subscribe(
        usuarios => {
            for (let id of usuarios){
                this.listarUsuarios.push(id.idUsuario)
            }
            
            // BUSCAMOS EL ULTIMO USUARIO y le sumamos 1
            let nuevoUsuario = Math.max(...this.listarUsuarios) + 1;
            // CREAMOS LAS BILLETERAS PARA EL NUEVO USUARIO
            for (let moneda of this.criptomonedas){
                let crearMoneda = {
                  idUsuario: nuevoUsuario,
                  clavePublica: "87ao6e5u876oa45ua4oe65",
                  nombreCripto: moneda.name,
                  cantidadCripto: 0,
                  cotizacion: 0,
                  imagen: moneda.image,
                  simbolo: moneda.symbol
                }
                console.log(crearMoneda);
                this.billeteraService.crearBilletera(crearMoneda).subscribe(
                    (makingWallet: any) => console.log(makingWallet)
                )
            }

            let cuentaPesosNuevoUsuario = {
                  idUsuario: nuevoUsuario,
                  cbu: "12332112331123213223",
                  saldo: 0
                }

                console.log(cuentaPesosNuevoUsuario);
                this.cuentaPesosService.crearCuentaPesos(cuentaPesosNuevoUsuario).subscribe(
                    ( makingBankAccount: any ) => console.log(makingBankAccount)
                )

        });


      alert ("Enviado con exito!");
    } else{
      this.form.markAllAsTouched();
    }
}

onEnviarLog(event:Event){
  event.preventDefault;
  
  let usuarioLog = {
      email: this.formLog.controls["emailLog"].value,
      clave: this.formLog.controls["contraseñaLog"].value
  }


  
  
  if(this.formLog.valid){
      this.authService.login(usuarioLog).subscribe(data => {
          console.log("DATA" + JSON.stringify(data));
          console.log(data);
          localStorage.setItem('token', data);
          localStorage.setItem('Email', usuarioLog.email)
          this.router.navigate(['../dashboard']);
      }, err => console.log(err))
      console.log(usuarioLog.email)
      console.log(usuarioLog.clave)
      // this.usuarioService.loginUsuario(usuarioLog).subscribe()


    alert ("")
  } else{
    this.formLog.markAllAsTouched();
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


  form: FormGroup = new FormGroup({}) ;
  formLog: FormGroup = new FormGroup({}) ;
  
  ngOnInit() {
    this.iniciaPopup();
    
    this.coniGeckoService.getAllCoins().subscribe(
        monedas => {
            this.criptomonedas = monedas;
        }
    )

    
  }

  private buildForm() {
    this.form = this.formBuilder.group({

      nombre: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/)]],
      apellido: ['',[Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/)]],
      dni: ['',[Validators.required]], 
      fecha: ['', [Validators.required, this.isYoung()]],
      email: ['', [Validators.required, Validators.pattern((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/))]],
      contraseña: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z0-9\_\-]+$/)]],
      contraseñaRepetida: ['', [Validators.required, this.valContrasenias()]], 
      terminosCondiciones: ['',[Validators.required]],
    });

    this.formLog = this.formBuilder.group({

      emailLog: ['', [Validators.required]],
      contraseñaLog: ['',[Validators.required]],
      
    });
    
  }

  get EmailLog (){
    return this.formLog.get('emailLog');
  }
  
  get ContraseniaLog (){
    return this.formLog.get('contraseniaLog');
  }

  get EmailLogValid(){
    return this.EmailLog?.touched && !this.EmailLog?.valid;
  }

  get ContraseniaLogValid(){
    return this.ContraseniaLog?.touched && !this.ContraseniaLog?.valid;
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

get Email (){
  return this.form.get('email');
  }
  
  get Contrasenia (){
  return this.form.get('contraseña');
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



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
      dni: ['',[Validators.required]], 
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
     // texto: ['', MisValidaciones.valTexto],
    });
    
    this.form.valid
    this.form.invalid //se dasibilita el botón de guardar

   // this.form.valueChanges
    //.pipe(
      //debounceTime(500)
    //)
    //.subscribe(value => {
      //console.log(value);
    //});
  }

  save(event: Event) {
    event.preventDefault();
    if(this.form.valid){ //validación para enviar el form
      const value = this.form.value;
      console.log(value);
    }
  }

//get emailField () {
  //return this.form.get('email');
//}


//get nombreField (){
  //return this.form.get('nombre');
//}

}




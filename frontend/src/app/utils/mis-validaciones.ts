import {AbstractControl} from '@angular/forms';

//export class MyValidations {
  //  static isYounger(control: AbstractControl){
    //    const value=control.value;
      //  if(value<18){
        //    return {isYounger:true}
        //}
    //}
    //}

    export class UserValidator{
      static verificarEspacios(control: AbstractControl){
        if(control.value.indeof(' ') >=0){
          return {sinEspacios: true}
        }
        return null;
      }
    }
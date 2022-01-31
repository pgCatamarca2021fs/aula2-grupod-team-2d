function validar(){
    var nombre, apellido, correo, usuario, clave, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    telefono = document.getElementById("telefono").value;

    expresion = /\w+@\w+\.+[a-z]/; //Para validar correo.

    if(nombre === "" || apellido === "" || correo === "" || usuario === "" || clave === "" || telefono === ""){
        alert("Todos los campos son obligatorios");
        return false;
    } else if(nombre.length<30){
        alert("El nombre es muy largo");
        return false;
       
    }
    else if(apellido.length<20){
        alert("El apellido es muy largo");
        return false;
    }
    else if(correo.length<100){
        alert("El correo es muy largo");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("El correo no es válido");
        return false;
    }

    else if(usuario.length<=30){
        alert("El usuario debe tener 30 caracteres como máximo");
        return false;
    }
    //else if(clave.length<=8 && clave.length<=15){
        //alert("La clave debe tener como minimo 5 caracteres y como máximo 15")
        //return false;
    //}
    else if(telefono.length<10){
        alert("El telefono es muy largo");
        return false;
    }
    else if(isNaN(telefono)){
        alert("Debe ingresar números");
        return false;
    }
    
}
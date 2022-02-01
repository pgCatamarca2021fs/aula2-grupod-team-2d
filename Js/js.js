function monedaConver() {
    let dolar = 102.60;
    let ars = parseInt(document.getElementById("ars").value);
    let resultado = ars / dolar;
    
    document.getElementById("resultado").innerHTML = resultado;
}

// ============= JS DEL LOGIN ==============

// Declaramos distintas variables para llamar a los elementos contenedores
var btnIniciaSesion = document.getElementById('btnIniciaSesion'),
    div = document.getElementById('divInicioSesion'),
    popup = document.getElementById('divInicioSesion1'),
    btnCerrarVentana = document.getElementById('btnCerrarVentana');


// Generamos una funcion en la que al clickear el boton le agregue una clase a los div correspondientes asi pudiendose mostrar
btnIniciaSesion.addEventListener('click', function () {
    div.classList.add('active');
    divInicioSesion1.classList.add('active');
});


// Misma logica pero al reves, se le remueve la clase para cerrar la ventana
btnCerrarVentana.addEventListener('click', function (e) {
    e.preventDefault();
    div.classList.remove('active');
    divInicioSesion1.classList.remove('active');
});


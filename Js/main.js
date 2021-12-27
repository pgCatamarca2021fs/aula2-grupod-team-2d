function monedaConver() {
    let dolar = 102;
    let ars = parseInt(document.getElementById("ars").value);
    let resultado = ars / dolar;

    document.getElementById("resultado").innerHTML = resultado;
}
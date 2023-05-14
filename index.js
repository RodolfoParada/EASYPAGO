var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir comportamiento por defecto
    // Resto del código aquí
    var pagar = document.getElementById("pagar").value;
    var interes = document.getElementById("pagarlo").value;
    var cuota = document.getElementById("cuota").value;


    let boton = document.getElementById("btn-enviar");

    console.log("pagar: " + pagar)
    console.log("interes: " + interes)
    console.log("cuota: " + cuota)

    boton.addEventListener("click", function () {

    });


    if (pagar >= 0 && interes <= 100 && cuota < 100)
        var resultado = (Number(pagar) * Number(interes)) / 100
    var total = (Number(pagar) + resultado) / Number(cuota)
    console.log(total)
    document.getElementById('mensaje').innerHTML = `!NO TE PREOCUPES¡ PUEDES PAGARLO EN:  ${ cuota } cuotas de :  $ ${ total.toFixed(3) }`;
    document.getElementById('mensaje').style.color = 'blue'


});
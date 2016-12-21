
function calcular()
{
    var puntosSquad = document.getElementById("puntosSquad").value;
    var maxPuntos = document.getElementById("maxPuntos").value;
    var porcentaje = (0.80 * maxPuntos);

	if(puntosSquad >= porcentaje) {
		//Si es verdad hace esto
		document.getElementById("salida").innerHTML = "Muy bien Squad!";

	} else{
        
        //Si no es verdad hace esto
		document.getElementById("salida").innerHTML = "Pueden hacerlo mejor."
	}
}



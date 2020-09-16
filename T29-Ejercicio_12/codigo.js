var fecha = "05/04/1982";
var email = "alba15@gmail.com";
var nombre = "Alba Fischer";
var texto = "A<script>Hola</script>diós";
var expresion = "&<>\"";
var formatoFecha = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/ ;
var formatoEmail = /^([.-]|\w)+@([.-]|\w)+(\.\w{2,3})+$/ ;
var formatoNombre = /(\w+)\s(\w+)/;
var formatEtiqueta = /<script>(\S)*<\/script>/;

function validarFecha (fecha){
    if (fecha.match(formatoFecha)){
        return "La fecha introducida es correcta";
    } else{
        return "La fecha introducida es incorrecta";
    }
}

function validarEmail (email){
    if (email.match(formatoEmail)){
        return "La dirección de email introducida es correcta";
    } else{
        return "La dirección de email introducida es incorrecta";
    }
}

function ordenInverso(nombre){
    var nuevoNombre = nombre.replace(formatoNombre, "$2, $1");
    return nuevoNombre;

}

function eliminarEtiquetas(){
    text = texto.replace(formatEtiqueta,"");
    return text;
}
document.write("Validar fecha: " + validarFecha(fecha)+"<br>");
document.write("Validar email: " + validarEmail(email)+"<br>");
document.write("El nombre con el nuevo formato es: " + ordenInverso(nombre)+"<br>");
document.write("Si eliminamos las etiquetas, el texto es: " + eliminarEtiquetas(texto));


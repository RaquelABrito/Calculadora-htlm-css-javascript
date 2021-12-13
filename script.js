var valoresDigitados = " ";
function ativa(obj) {
    //console.log(obj.id);
    var identificador = obj.id;
    var valueDiv = document.getElementById(identificador).getAttribute('value');


    document.getElementById('visor').innerHTML = valueDiv;



    if (valueDiv == "-" || valueDiv == "+" || valueDiv == "/" || valueDiv == "*" ) {
        if (valueDiv == ",") {
            valueDiv == ".";
            console.log(valueDiv);
        }
    } else {
        parseFloat(valueDiv);
        console.log("float" + valueDiv);
    }

    /*armazenar a string do que foi clicado*/
    valoresDigitados = valoresDigitados + valueDiv;
}

function limpar() {
    document.getElementById('visor').innerHTML = " ";
    valoresDigitados = "";
}

function igual() {
    document.getElementById('visor').innerHTML = eval(valoresDigitados);
    console.log(valoresDigitados);
}
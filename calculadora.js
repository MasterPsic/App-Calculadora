let operacionActual = '';
let valorAnterior = 0;
let operacionPendiente = false;

function agregarNumero(numero) {
    if (operacionPendiente) {
        document.getElementById('resultado').value = numero;
        operacionPendiente = false;
    } else {
        document.getElementById('resultado').value += numero;
    }
}

function operacion(operador) {
    if (operacionActual === '') {
        valorAnterior = parseInt(document.getElementById('resultado').value);
    } else {
        calcular();
    }

    operacionActual = operador;
    operacionPendiente = true;
}

function calcular() {
    const valorActual = parseInt(document.getElementById('resultado').value);

    switch (operacionActual) {
        case '+':
            valorAnterior += valorActual;
            break;
        case '-':
            valorAnterior -= valorActual;
            break;
        case '*':
            valorAnterior *= valorActual;
            break;
        case '/':
            valorAnterior /= valorActual;
            break;
    }

    document.getElementById('resultado').value = valorAnterior.toString();
    operacionActual = '';
}

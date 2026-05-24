document.getElementById('numeroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numero = parseFloat(document.getElementById('numero').value);
    const operacao = document.getElementById('operacao').value;

    let resultado;

    if (operacao === 'quadrado') {
        resultado = calcularQuadrado(numero);
    } else if (operacao === 'cubo') {
        resultado = calcularCubo(numero);
    } else {
        resultado = 'Escolha uma operação válida.';
    }

    document.getElementById('resultado').textContent = resultado;
});

function calcularQuadrado(numero) {
    return numero * numero;
}

function calcularCubo(numero) {
    return numero * numero * numero;
}

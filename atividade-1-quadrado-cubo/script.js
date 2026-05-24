document.getElementById('numeroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numero = parseFloat(document.getElementById('numero').value);

    const quadrado = calcularQuadrado(numero);
    const cubo = calcularCubo(numero);

    document.getElementById('resultadoQuadrado').textContent = quadrado;
    document.getElementById('resultadoCubo').textContent = cubo;
});

function calcularQuadrado(numero) {
    return numero * numero;
}

function calcularCubo(numero) {
    return numero * numero * numero;
}

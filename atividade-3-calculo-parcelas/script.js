document.getElementById('compraForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const parcelas = parseInt(document.getElementById('parcelas').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value);

    const valorTotal = calcularValorTotal(valorCompra, taxaJuros, parcelas);
    const valorParcela = valorTotal / parcelas;

    document.getElementById('valorParcela').textContent = formatarMoeda(valorParcela);
    document.getElementById('valorTotal').textContent = formatarMoeda(valorTotal);
});

function calcularValorTotal(valorCompra, taxaJuros, parcelas) {
    const jurosDecimal = taxaJuros / 100;
    return valorCompra * Math.pow(1 + jurosDecimal, parcelas);
}

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

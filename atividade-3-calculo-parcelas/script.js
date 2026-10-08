// Calcula a parcela pela tabela Price, o sistema usado no comércio e nos bancos:
// todas as parcelas têm o mesmo valor, e os juros de cada mês incidem só sobre
// o saldo que ainda falta pagar.
//
//   parcela = valor × juros / (1 − (1 + juros)^−parcelas)
//
// A versão anterior aplicava os juros sobre o valor inteiro em todos os meses
// (valor × (1 + juros)^parcelas), o que cobrava juros sobre o que já tinha sido pago.
function calcularValorParcela(valorCompra, taxaJuros, parcelas) {
    const jurosDecimal = taxaJuros / 100;

    if (jurosDecimal === 0) {
        return valorCompra / parcelas;
    }
    return valorCompra * jurosDecimal / (1 - Math.pow(1 + jurosDecimal, -parcelas));
}

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

if (typeof document !== 'undefined') {
    document.getElementById('compraForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const valorCompra = parseFloat(document.getElementById('valorCompra').value);
        const parcelas = parseInt(document.getElementById('parcelas').value);
        const taxaJuros = parseFloat(document.getElementById('taxaJuros').value);

        const valorParcela = calcularValorParcela(valorCompra, taxaJuros, parcelas);
        const valorTotal = valorParcela * parcelas;

        document.getElementById('valorParcela').textContent = formatarMoeda(valorParcela);
        document.getElementById('valorTotal').textContent = formatarMoeda(valorTotal);
    });
}

if (typeof module !== 'undefined') {
    module.exports = { calcularValorParcela };
}

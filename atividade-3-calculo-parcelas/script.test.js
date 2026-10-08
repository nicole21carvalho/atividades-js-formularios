// Rode com: node --test
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { calcularValorParcela } = require('./script.js');

const centavos = (valor) => Math.round(valor * 100) / 100;

test('R$ 1.000 em 12x com 2% ao mês dá parcelas de R$ 94,56', () => {
  assert.equal(centavos(calcularValorParcela(1000, 2, 12)), 94.56);
  assert.equal(centavos(calcularValorParcela(1000, 2, 12) * 12), 1134.72);
});

test('sem juros, a parcela é o valor dividido pelo número de parcelas', () => {
  assert.equal(calcularValorParcela(1200, 0, 12), 100);
});

test('em uma parcela, paga o valor mais um mês de juros', () => {
  assert.equal(centavos(calcularValorParcela(500, 3, 1)), 515);
});

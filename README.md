# 📝 Atividades - Formulários HTML com JavaScript

Este projeto contém 3 atividades prontas para abrir no VS Code.

## 💻 Como abrir no VS Code

1. Abra o VS Code.
2. Clique em **File > Open Folder**.
3. Selecione a pasta `atividades-js-formularios`.
4. Abra qualquer pasta de atividade.
5. Clique duas vezes no arquivo `index.html` ou use a extensão **Live Server**.

## 📚 Atividades

### 🧩 Atividade 1
Calcula e exibe o quadrado e o cubo de um número.

### 🧩 Atividade 2
Permite escolher entre calcular o quadrado ou o cubo usando um campo `<select>`.

### 🧩 Atividade 3
Calcula o valor das parcelas e o total a pagar com juros mensais, pela **tabela Price** (o sistema de parcelas fixas usado no comércio e nos bancos):

```text
parcela = valor × juros / (1 − (1 + juros)^−parcelas)
```

Exemplo: R$ 1.000,00 em 12x com 2% ao mês dá 12 parcelas de **R$ 94,56**, total de **R$ 1.134,72**.

> A primeira versão aplicava os juros sobre o valor inteiro em todos os meses (`valor × (1 + juros)^parcelas`), o que dava R$ 105,69 por parcela no mesmo exemplo, porque cobrava juros sobre o que já tinha sido pago.

Para conferir o cálculo (precisa do [Node.js](https://nodejs.org/)):

```bash
node --test atividade-3-calculo-parcelas/
```

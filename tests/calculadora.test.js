const calculadora = require("../models/calculadora");

test("soma 2 + 2 para resultar em 4", () => {
  const resultado = calculadora.calcularSoma(2, 2);
  expect(resultado).toBe(4);
});

test("soma 100 + 5 para resultar em 105", () => {
  const resultado = calculadora.calcularSoma(100, 5);
  expect(resultado).toBe(105);
});

test("subtracao 2 - 2 para resultar em 0", () => {
  const resultado = calculadora.calcularSubtracao(2, 2);
  expect(resultado).toBe(0);
});

test("multiplicacao 2 * 2 para resultar em 4", () => {
  const resultado = calculadora.calcularMultiplicacao(2, 2);
  expect(resultado).toBe(4);
});

test("divisao 2 / 2 para resultar em 1", () => {
  const resultado = calculadora.calcularDivisao(2, 2);
  expect(resultado).toBe(1);
});

test("divisao por zero deve lançar erro", () => {
  expect(() => {
    calculadora.calcularDivisao(6, 0);
  }).toThrow("Divisão por zero não é permitida.");
});

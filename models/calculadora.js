function calcularSoma(a, b) {
  return a + b;
}

function calcularSubtracao(a, b) {
  return a - b;
}

function calcularMultiplicacao(a, b) {
  return a * b;
}

function calcularDivisao(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }
  return a / b;
}
module.exports = {
  calcularSoma,
  calcularSubtracao,
  calcularMultiplicacao,
  calcularDivisao,
};

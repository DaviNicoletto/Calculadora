let expressao = "";

expressao = document.getElementById('visor').value;

function inserirNum(numero) {
  console.log(numero);
  expressao += numero;
  document.getElementById("visor").value = expressao;
}

function inserirOp(operador) {
  expressao += operador;
  document.getElementById("visor").value = expressao;
}

function limpar() {
  expressao = "";
  console.log(expressao);
  document.getElementById("visor").value = expressao;
}

function calcular() {
  try {
    const resultado = eval(expressao);
    document.getElementById("visor").value = resultado;
    expressao = resultado;
  } catch (error) {
    document.getElementById("visor").value = "Erro";
    expressao = "";
  }
}

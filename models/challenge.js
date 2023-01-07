class Challenge {
  consigna = "";
  testsCases = [];
  codigo_ejemplo = "";
  dificultad = 1 | 2 | 3;

  constructor(consigna, testCases, codigo_ejemplo, dificultad) {
    this.consigna = consigna;
    this.testsCases = testCases;
    this.codigo_ejemplo = codigo_ejemplo;
    this.dificultad = dificultad;
  }
}

class TestCase {
  input;
  output;

  constructor(input, output) {
    this.input = input;
    this.output = output;
  }
}

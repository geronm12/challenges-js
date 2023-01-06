const getChallengeFromUser = (text) => {
  if (typeof text !== "string") {
    throw new Error("Es necesario que se envíe un string");
  }

  var fun = text.slice(text.indexOf("{") + 1, text.lastIndexOf("}"));
  const tempFun = new Function(...db.challenge.args, fun);
  testUserChallenge(tempFun);
};

//en esta funcion me pueden pasar objetos, arrays o datos simples
function testUserChallenge(funcion, challenge) {
  const cases = [];

  try {
    challenge.testCases.forEach((element) => {
      const resultadoEsperado = element.output;
      const args = element.input;
      const resultado = funcion(...args);

      if (resultado === resultadoEsperado) {
        cases.push({
          element,
          resultado: true,
        });
      } else {
        cases.push({
          element,
          resultado: false,
        });
      }
    });
  } catch (e) {
    console.log("Error al compilar.");
  }
}

function countScore(asserts, outputs) {
  return (asserts / outputs) * 100;
}

//Los argumentos y la estructura de la función pueden ser dinámicas
//y variar, por ejemplo puedo tener un array en los argumentos
//o puedo tener n argumentos para pasar a la función
//y el resultado esperado también
//buscar un forma lógica de llevar esto a un campo más abierto para poder
//abarcar la mayor cantidad de casos posibles a la hora
//de crear la función, así sólo necesitaríamos crearlas desde la base de datos o
// Algún sistema que función como "admin"

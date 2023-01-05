const db = {
  challenge: {
    testCases: [
      {
        input: [4, 4],
        output: 8,
      },
      {
        input: [8, 8],
        output: 16,
      },
    ],
    codigo: `function suma(a,b){
    
    }`,
    args: ["a", "b"],
  },
  challengeb: {
    testCases: [
      {
        input: [[4, 2, 5, 11]],
        output: ["par", "par", "impar", "impar"],
      },
    ],
    codigo: `function parOimpar(numbers){
    
    }`,
    args: ["numbers"],
  },
};

const textArea = document.getElementById("funcion");
const button = document.getElementById("test");

window.onload = () => {
  textArea.value = db.challenge.codigo;
};

button.addEventListener("click", () => {
  const result = textArea.value;
  var s = result.slice(result.indexOf("{") + 1, result.lastIndexOf("}"));
  const tempFun = new Function(...db.challenge.args, s);
  tester(tempFun);
});

//en esta funcion me pueden pasar objetos, arrays o datos simples
function tester(funcion) {
  try {
    db.challenge.testCases.forEach((element) => {
      const resultadoEsperado = element.output;
      const args = element.input;
      console.log(args);
      const resultado = funcion(...args);
      console.log(resultado);
    });
  } catch (e) {
    console.log("Error al compilar.");
  }
}

function testerArray() {}

function testearPrimitive() {}

function testerObjects() {
  throw new Error("Not Implemented");
}

function parOimpar(numbers) {
  const array = [];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
      array[index] = "par";
    } else {
      array[index] = "impar";
    }
  }

  return array;
}

function suma(a, b) {
  return a + b;
}

//Los argumentos y la estructura de la función pueden ser dinámicas
//y variar, por ejemplo puedo tener un array en los argumentos
//o puedo tener n argumentos para pasar a la función
//y el resultado esperado también
//buscar un forma lógica de llevar esto a un campo más abierto para poder
//abarcar la mayor cantidad de casos posibles a la hora
//de crear la función, así sólo necesitaríamos crearlas desde la base de datos o
// Algún sistema que función como "admin"

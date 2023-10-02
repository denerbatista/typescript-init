"use strict";
//tipagem string implicita
let variavel = "texto";
//tipagem string(letras palavras) explicita
let variavel2 = "texto";
// tipagem de variavel com numero
let variavel3 = 0;
// tipagem de variaveis lógicas
let variavel4 = true;
let variavel5 = false;
//tipagem de variavel objeto
let variavel6 = {};
let variavel61 = { pessoa: "batata", key2: 9.5 };
//tipagem de variavel array
let variavel7 = [0, 1];
let variavel8 = [0, 1, 8, 8];
let variavel9 = ["texto1", "texto2"];
// função que não tem retorno chamada de void
function numberRandom() {
    variavel3 = Math.random();
    console.log(variavel3);
}
function numberRandomReturn() {
    return Math.random();
}
console.log(numberRandomReturn());
numberRandom();

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
// função com retorno (no caso retorna um numero)
function numberRandomReturn() {
    return Math.floor(Math.random() + 1);
}
console.log(numberRandomReturn());
numberRandom();
let mulher = {
    nome: "Rita",
    idade: 28,
    altura: 1.73,
    peso: 85,
    etnia: "negra"
};
let pedreiro = {
    funcao: "pedreiro",
    admissao: "25/10/2022",
    nome: "Osvaldo",
    idade: 30,
    altura: 1.85,
    peso: 90,
    etnia: "Branco",
    trabalhar() {
        return "morcegando";
    }
};
class Pedreiro {
    constructor(_funcao, _admissao) {
        this.funcao = _funcao;
        this.admissao = _admissao;
    }
    trabalhar() {
        return "morcegando";
    }
}
let funcionario = new Pedreiro("armador", "25/08/2008");
console.log(funcionario.trabalhar);
funcionario.trabalhar();

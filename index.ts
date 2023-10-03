//tipagem string implicita
let variavel = "texto";

//tipagem string(letras palavras) explicita
let variavel2: string = "texto";

// tipagem de variavel com numero
let variavel3: number = 0;

// tipagem de variaveis lógicas
let variavel4: boolean = true;
let variavel5: boolean = false;

//tipagem de variavel objeto
let variavel6: object = {}
let variavel61: { pessoa: string, key2: number } = { pessoa: "batata", key2: 9.5 }

//tipagem de variavel array
let variavel7: [number, number] = [0, 1]
let variavel8: number[] = [0, 1, 8, 8]
let variavel9: string[] = ["texto1", "texto2"]

// função que não tem retorno chamada de void
function numberRandom(): void {
    variavel3 = Math.random()
    console.log(variavel3)
}

// função com retorno (no caso retorna um numero)
function numberRandomReturn(): number {
    return Math.floor(Math.random() + 1)
}

console.log(numberRandomReturn())
numberRandom()

interface Pessoa {
    nome: string;
    idade: number;
    altura: number;
    peso: number;
    etnia: string;
}

let mulher: Pessoa = {
    nome: "Rita",
    idade: 28,
    altura: 1.73,
    peso: 85,
    etnia: "negra"
}

interface Profissional extends Pessoa {
    funcao: string,
    admissao: string
    trabalhar (): string
}

// type Caderno = {
//     tipo: string;
//     qtdFolhas: number;
//     tipoDeCapa: string;
// }

interface Profissional extends Pessoa {
    funcao: string,
    trabalhar (): string
}

interface Homem {
    forca: number
    hormonio: string
}

interface Mulher {
    forca: number
    hormonio: string
}

type Personagem = Mulher | Homem

let bat: Personagem = {
    forca: 50,
    hormonio: "X"
}

type Caderno = {}

let pedreiro: Profissional = {
    funcao: "pedreiro",
    admissao: "25/10/2022",
    nome: "Osvaldo",
    idade: 30,
    altura: 1.85,
    peso: 90,
    etnia: "Branco",
    trabalhar () {
        return "morcegando"
    }
}

class Pedreiro implements Profissional {
    constructor(_funcao: string, _admissao: string) {
        this.funcao = _funcao
        this.admissao = _admissao
    }

    funcao!: string;
    admissao!: string;
    nome!: string;
    idade!: number;
    altura!: number;
    peso!: number;
    etnia!: string;
    trabalhar () {
        return "morcegando"
    }
}

let funcionario: Pedreiro = new Pedreiro("armador", "25/08/2008")

console.log(funcionario.trabalhar)
funcionario.trabalhar()






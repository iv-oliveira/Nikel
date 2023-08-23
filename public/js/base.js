const nome = "Ivson";
let nome2 = "Ivson";
let pessoaDefault = {
    nome: "Ivson",
    idade: "31",
    trabalho: "Programador"
}
let nomes = ["Ivson", "Evelly", "Snow"]

let pessoas = [{
    nome: "Ivson",
    idade: "31",
    trabalho: "Programador"
}, 
{
    nome: "Evelly",
    idade: "24",
    trabalho: "Programadora"
}]

function alterarNome() {
    nome2 = "Evelly"
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEAlteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado por novo nome:");
    console.log(nome2);
}

function imprimePessoa(pessoa) {
    console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho:");
console.log(pessoa.trabalho);
}

function adicionarPessoas(pessoa) {
    pessoas.push (pessoa);
}

adicionarPessoas({
    nome: "Silva",
    idade: 28,
    trabalho: "porteiro"
});

console.log(pessoas);

//console.log(pessoas);
//console.log(nomes)
//console.log(nomes[2])

//imprimePessoa(pessoaDefault);


//alterarNome();
//recebeEAlteraNome("Ivson de novo")
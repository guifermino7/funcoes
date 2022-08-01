function calculeIdade (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade,`;
};

const pessoa1 = {
    nome: "Guilherme",
    idade: 21,
};

const pessoa2 = {
    nome: "Isadora",
    idade: 20,
};

const animal = {
    nome: "Kyara",
    idade: 1,
    raca: "Pastor-alemão",
};

console.log(calculeIdade.apply(pessoa1, [4])); 
/* Caso fosse utilizado ".call" ficaria assim:
console.log(calculeIdade.call(pessoa1, 4));
Mas teria o mesmo retorno.
*/
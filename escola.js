const alunos = [
    {
        nome: "Guilherme",
        nota: 7,
        turma: "1A",
    },
    {
        nome: "Isadora",
        nota: 9,
        turma: "1A",
    },
    {
        nome: "Breno",
        nota: 6,
        turma: "2C",
    },
    {
        nome: "Miguel",
        nota: 4,
        turma: "2C",
    },
];

function alunosAprovados (arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        
        const {nota, nome} = arr[i];
        
        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));
const Alunos = require('./mod');

const estudante1 = new Alunos('Thalita', 1, [9, 5, 7, 8]);
const estudante2 = new Alunos('Diogo', 4, [2, 0, 3, 5]);
const estudante3 = new Alunos('Gabriela', 2, [10, 8, 9, 10]);
const estudante4 = new Alunos('Marcelo', 3, [6, 9, 7, 4]);

let estudantes = [estudante1, estudante2, estudante3, estudante4];

module.exports = estudantes;

/*
Testes de console.log:

console.log(estudante3.media());
console.log(estudante2.qtdFaltas());
console.log(estudante2.qtdFaltas);
console.log(estudante4);
*/
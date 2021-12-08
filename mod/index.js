/* 
    Checkpoint 3 
    1 - Fazer uma class Alunos com constructor com atributos nome, falta e nota.
    2 - Fazer um método que calcula média e um metodo que soma uma falta usando foreach.
    3 - Fazer um arquivo com objeto curso com atributos nome do curso, node aprovação, quantidade de faltas e lista de alunos usando objeto.
    4 - Fazer um método que adicione um aluno na lista de estudantes usando push.
    5 - Fazer um método que mostre se um estudante foi aprovado ou não usando looping.
    6 - Fazer um método que imprime um array de aprovados e reprovados usando looping.
    7 - fazer um terceiro arquivo com instanciamento de alunos e criar lista de estudantes.

    Para testar execute o documento curso.js 
*/

class Alunos {
    nome = " ";
    qtdFaltas = 0;
    notas = [];

    constructor(nome, qtdFaltas, notas) {
        this.nome = nome;
        this.qtdFaltas = qtdFaltas;
        this.notas = notas;

        this.media = function () {
            let media = 0;
            let soma = 0;

            this.notas.forEach(i => {
                soma += i;
            }
            );
            media = soma / this.notas.length;
            return media;
        }

        this.faltas = function () {
            this.qtdFaltas += 1
        }
    }
}

module.exports = Alunos;
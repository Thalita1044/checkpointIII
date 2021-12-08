let estudantes = require('./estudante');

const curso = {
    notaAprov: 6,
    faltasMax: 4,
    NomeCurso: "Desing",
    arrayEstudantes: estudantes,

    adicionarAluno: function (alunoCurso) {

        this.arrayEstudantes.push(alunoCurso)

    },

    aprovacao: function (alunoCurso) {

        if (alunoCurso.media() >= this.notaAprov && alunoCurso.qtdFaltas < this.faltasMax) {
            return "Aprovado";
        } else if (alunoCurso.qtdFaltas === this.faltasMax && alunoCurso.media() > (this.notaAprov * 1.1)) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }

    },

    arrayAprovados: function () {

        let listaArray = [];
        this.arrayEstudantes.forEach(i => {
            if (i.media() >= this.notaAprov && i.qtdFaltas < this.faltasMax) {
                listaArray.push("Aprovado");
            } else if (i.qtdFaltas === this.faltasMax && i.media() > (this.notaAprov * 1.1)) {
                listaArray.push("Aprovado");
            } else {
                listaArray.push("Reprovado");
            }
        });

        return listaArray

    }

}

/*
console.log dos desafios :
console.log(curso.aprovacao(estudantes[0]));
*/
console.log(curso.arrayAprovados());
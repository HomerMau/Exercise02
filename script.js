/* Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [x]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:*/

const students = [
  {
    name: "Nicole",
    testOne: 6.5,
    testTwo: 7.5,
  },
  {
    name: "Tiago",
    testOne: 4.5,
    testTwo: 2.4,
  },
  {
    name: "Rebeca",
    testOne: 10.0,
    testTwo: 9.5,
  },
  {
    name: "Pedro",
    testOne: 7.5,
    testTwo: 3.8,
  },
  {
    name: "João",
    testOne: 2.0,
    testTwo: 9.5,
  },
]

function media(testOne, testTwo) {
  let result = (testOne + testTwo) / 2
  if (result >= 7) {
    return `${result} 
Parabéns! Você foi aprovado(a) no concurso! `
  } else {
    return `${result} 
Infelizmente, você não foi aprovado(a) no concurso.`
  }
}

function printPatientMedia(student) {
  return `
O(a) aluno(a) ${student.name} teve a média de ${media(
    student.testOne,
    student.testTwo
  )}
  `
}
for (let student of students) {
  let message = printPatientMedia(student)
  alert(message)
}

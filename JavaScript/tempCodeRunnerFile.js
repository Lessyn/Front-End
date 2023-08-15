const input = require('readline-sync');

let nota;
let soma = 0;

for ( let i = 1; i <= 3; i++){
    nota = Number(input.question(`Informe a ${i} do aluno:`));
    soma += nota;
}



console.log(`A média da nota do aluno é ${soma/3}`);

let notas = [7, 8, 10, 9];

let media = 0;

let soma = 0;

for (let i = 0; i < notas.length; i++) {

    soma += parseInt(notas[i]);
    media = soma / notas.length;

}



alert('Suas Notas foram: ' + notas + '\n' + 'Sua Media é: ' + media);
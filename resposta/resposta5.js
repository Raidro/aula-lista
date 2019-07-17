
//Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.

let numeros = new Array(5);
let par = [];
let impar = [];

for (let i = 0; i < numeros.length; i++) {

    numeros[i] = parseFloat(prompt('Entre com 20 numeros: ').trim());

    if (numeros[i] % 2 == 0) {

        par = numeros[i];

    } else {
        impar = numeros[i];
    }
}

alert('O Vetor é: ' + numeros + '\n' + 'O Vetor par é: ' + par + '\n' + 'O Vetor Impar é: ' + impar);
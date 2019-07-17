
//Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.

let numeros = new Array(20);
let par = [];
let impar = [];
let x = 0;
let y = 0;

for (let i = 0; i < numeros.length; i++) {

    numeros[i] = parseFloat(prompt('Entre com 20 numeros: ').trim());

    if (numeros[i] % 2 == 0) {

        par[x] = numeros[i];// não esquecer de usar  o o indice no par e no impar tb, pois, ele precisa saber aonde vai colocar  o valor que vem de numeros;
        x++;

    } else {
        impar[y] = numeros[i];
        y++;
    }
}

alert('O Vetor é: ' + numeros + '\n' + 'O Vetor par é: ' + par + '\n' + 'O Vetor Impar é: ' + impar);
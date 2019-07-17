
//Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let inverso = [];
let tamanho_vetor = numero.length;

for (let i = 0; i < tamanho_vetor; i++) {

    inverso[i] = numero.pop();


}

alert('Inverso: ' + inverso)
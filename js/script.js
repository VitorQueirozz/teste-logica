/*
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{
K = K + 1;

SOMA = SOMA + K;
}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
*/

let indice = 13
let k = 0
let soma = 0

while(k < indice) {
    k = k + 1           // 1 2 3 4 5 6 7...
    soma = soma + k     // 1 3 6 10 15 21 28...
    console.log(soma)
}

console.log('------------------------------------------------------------')


/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/
function fibo(valor) {

    let n1 = 0
    let n2 = 1
    let n3 = 0

    while(valor > n3) {
        n3 = n1 + n2
        n1 = n2
        n2 = n3
    }

    if(valor == 0 || valor == 1) {
        console.log('O número faz parte da sequência de fibonacci')
    } else if (valor == n3) {
        console.log(`O número faz parte da sequência de fibonacci, o próximo número da sequência é ${n1 + valor}.`)
    } else {
        console.log('O número não faz parte da sequência de fibonacci')
    }
}

console.log(fibo(987))


console.log('------------------------------------------------------------')


/*
3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, (_9_)  // Aumentando de 2 em 2

b) 2, 4, 8, 16, 32, 64, (_128_)  // Multplicando os numeros por 2
 
c) 0, 1, 4, 9, 16, 25, 36, (_49_)    // Subindo de impar em impar = 1 - 3 - 5 - 7 - 9 - 11 - ('13'+ 36 = 49)

d) 4, 16, 36, 64, (_100_)   // Aumentando de 8 em 8 o espaço entre eles = 12 - 20 - 28 - ('36' + 64 = 100)

e) 1, 1, 2, 3, 5, 8, (_13_)   // Fibonacci

f) 2, 10, 12, 16, 17, 18, 19, _()_   // Essa eu não sei

*/

console.log('------------------------------------------------------------')

/* 

4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.
*/

console.log('Resposta: O caminhão e o carro estarão na mesma distância de Ribeirão Preto quando se cruzarem.')

console.log('------------------------------------------------------------')

/*
5) Escreva um programa que inverta os caracteres de um string.
*/

function inverta(e) {
    let suaString = "";
    for (let i = e.length - 1; i >= 0; i--) {
        suaString += e[i];
    }
    return suaString;
}

console.log(inverta('Meu nome é Vitor'));


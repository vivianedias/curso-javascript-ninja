/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
<<<<<<< HEAD
const championship = 'Campeonato Brasileiro';
console.log(championship);
=======
// ?
>>>>>>> 281f43562aee279d2c98578aaeedabfdbf64c834

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
<<<<<<< HEAD
const teams = ['São Paulo', 'Corinthians', 'Santos', 'Palmeiras', 'Flamengo']
=======
// ?
>>>>>>> 281f43562aee279d2c98578aaeedabfdbf64c834

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
<<<<<<< HEAD
function showTeamPosition(n){
    if (n <= 5){
        return 'O time está em ' + n + 'º lugar é o ' + teams[n - 1 ];
    } else if(n < 1 || n > 5){
        return 'Não temos a informação do time que está nessa posição'
    } 
    return false;
}
=======
// ?
>>>>>>> 281f43562aee279d2c98578aaeedabfdbf64c834

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
<<<<<<< HEAD
console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(4));
console.log(showTeamPosition(3));
console.log(showTeamPosition(6));
=======
// ?
>>>>>>> 281f43562aee279d2c98578aaeedabfdbf64c834

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
<<<<<<< HEAD

var counter = 20;
while(counter <= 30){
    console.log(counter);
    counter++;;
}
=======
// ?
>>>>>>> 281f43562aee279d2c98578aaeedabfdbf64c834

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
<<<<<<< HEAD
function convertToHex(cor){
    const colors = {
        'Rosa': '#ff00e9',
        'Vermelho': '#ff0000',
        'Roxo': '#9242f4',
        'Branco': '#fff',
        'Cinza': '#706f6f'
    }
    switch(cor){
        case 'Rosa':
            return 'O hexadecimal para a cor Rosa é ' + colors[cor] + '.';
        break;
        case 'Vermelho':
            return 'O hexadecimal para a cor Vermelho é ' + colors[cor] + '.';
        break;
        case 'Roxo':
            return 'O hexadecimal para a cor Roxo é ' + colors[cor] + '.';
        break;
        case 'Branco':
            return 'O hexadecimal para a cor Branco é ' + colors[cor] + '.';
        break;
        case 'Cinza':
            return 'O hexadecimal para a cor Cinza é ' + colors[cor] + '.';
        break;     
        default:
            return 'Não temos o equivalente hexadecimal para ' + cor + '.' ;
    }
}
=======
// ?
>>>>>>> 281f43562aee279d2c98578aaeedabfdbf64c834

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
<<<<<<< HEAD
console.log(convertToHex('Rosa'));
console.log(convertToHex('Vermelho'));
console.log(convertToHex('Branco'));
console.log(convertToHex('Cinza'));
console.log(convertToHex('Roxo'));
console.log(convertToHex('Preto'));
console.log(convertToHex('Verde'));
console.log(convertToHex('Laranja'));
=======
// ?
>>>>>>> 281f43562aee279d2c98578aaeedabfdbf64c834

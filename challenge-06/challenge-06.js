/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
const championship = 'Campeonato Brasileiro';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
const teams = ['São Paulo', 'Corinthians', 'Santos', 'Palmeiras', 'Flamengo']

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
function showTeamPosition(n){
    if (n <= 5){
        return 'O time está em ' + n + 'º lugar é o ' + teams[n];
    } else if(n === undefined){
        return 'Não temos a informação do time que está nessa posição'
    } 
    return false;
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(0);
showTeamPosition(2);
showTeamPosition(4);
showTeamPosition(3);
showTeamPosition(6);

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

var counter = 20;
while(counter <= 30){
    counter++;
    console.log(counter);
}

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

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('Rosa'));
console.log(convertToHex('Vermelho'));
console.log(convertToHex('Branco'));
console.log(convertToHex('Cinza'));
console.log(convertToHex('Roxo'));
console.log(convertToHex('Preto'));
console.log(convertToHex('Verde'));
console.log(convertToHex('Laranja'));

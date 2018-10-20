/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [32, 15, 'chiuis', true, 'goldi']

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr)[1])
/
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, i){
    return arr[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var chiuis = ['xuxu', true, undefined, 13, [1, 2, 3, 4]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2(chiuis, 0);
myFunction2(chiuis, 1);
myFunction2(chiuis, 2);
myFunction2(chiuis, 3);
myFunction2(chiuis, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function books(nome){
    var obj = {
        'Harry Potter': {
            quantidadePaginas: 485,
            autora:'J.K Rowling',
            editora: 'Rocco',
        },
        'Amora': {
            quantidadePaginas: 265,
            autora:'J.K Rowling',
            editora: 'Independente',
        },
        'O Segundo Sexo': {
            quantidadePaginas: 359,
            autora:'Simone Beauvoir',
            editora: 'Novo Tempo',
        }
    }
    if(nome === undefined){
        return obj;
    }
    return obj[nome];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(books());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Harry Potter tem ' + books('Harry Potter').quantidadePaginas + ' páginas.')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('A autora do livro Amora é ' + books('Amora').autora )

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro O Segundo Sexo foi publicado pela editora ' + books('O Segundo Sexo').editora )
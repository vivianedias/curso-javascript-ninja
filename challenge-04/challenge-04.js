# Desafio da semana #4

/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(teste){
    if(teste){
        return true;
    }
        return false;
}

ou 

var isTruthy = function(param){
    return !!param;
};
 
// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
undefined
null
0
NaN
'' ou ""
-0
false


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
?

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'fiat',
    modelo: 'palio',
    placa: 'cxp - 5050',
    ano: 1998,
    cor: 'prata',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor){
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
    return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo()
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.

- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"

- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"

- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adcPessoas = function(pessoas){
    if((5 - carro.quantidadePessoas) > 1){
        var pessoa = ' pessoas!';
    } else{
        var pessoa = ' pessoa!';
    }

    var quanFinal = carro.quantidadePessoas + pessoas;

    if(quanFinal < 5){
        carro.quantidadePessoas += pessoas;
        return 'Já temos ' + quanFinal + ' no carro, e só cabem mais ' + (5 - carro.quantidadePessoas) + pessoa;
    } else if (quanFinal === carro.assentos){
        return 'O carro já está lotado!';
    } else {
    return 'O número limite é 5.'
}
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor
'prata'

// Mude a cor do carro para vermelho.
carro.cor = "vermelho"

// E agora, qual a cor do carro?
'vermelho'

// Mude a cor do carro para verde musgo.
carro.cor = 'verde musgo'

// E agora, qual a cor do carro?
'verde musgo'

// Qual a marca e modelo do carro?
'palio'

// Adicione 2 pessoas no carro.
carro.adcPessoas(2)

// Adicione mais 4 pessoas no carro.
'O número limite é 5'

// Faça o carro encher.
'O carro já está lotado!'

// Tire 4 pessoas do carro.
"Já temos -2 pessoas! no carro, e só cabem mais 7 pessoas!"

// Adicione 10 pessoas no carro.
'O número limite é 5'

// Quantas pessoas temos no carro?
"Já temos -2 pessoas! no carro, e só cabem mais 6 pessoas!"

var numero = ''
var operadorAtual = ''
var numeroAnterior = ''

function addNumero(caractere){
    numero += caractere
    document.getElementById('display').value = numero
}

function limparDisplay(){
     numero = ''
 operadorAtual = ''
 numeroAnterior = ''
    document.getElementById('display').value = ''
}

function apagar(){
    let display = document.getElementById('display').value
    document.getElementById('display').value = display.slice(0,-1)
}

function operador(op){
    if(numero !== ''){
        operadorAtual = op
        numeroAnterior = numero
        numero = ''
        document.getElementById('display').value = ''

    }
}


function calcular(){
    
    let resultado = 0
    let atual = parseFloat(numero)
    let anterior = parseFloat(numeroAnterior)

    if(operadorAtual === '+'){
        resultado = anterior + atual
    }else if(operadorAtual === '-'){
        resultado = anterior - atual
    }else if(operadorAtual === '*'){
        resultado = anterior * atual
    }else if(operadorAtual === '/'){
        if(atual === 0){
            document.getElementById('display').value = 'Erro: divisão por zero'
            return
        }
        resultado = anterior/atual

    }


    document.getElementById('display').value = resultado
    numero = resultado
    operadorAtual = ''
    numeroAnterior = ''
}

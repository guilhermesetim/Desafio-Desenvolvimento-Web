function simulacao(){
    let dadosFinanciamento =  coletarDados()

    let envioDados = new FormData
    envioDados.append('valorCasa',dadosFinanciamento[0])
    envioDados.append('salarioComprador',dadosFinanciamento[1])
    envioDados.append('anosFinanciamento',dadosFinanciamento[2])

    fetch('server.php',{
        method: 'post',
        body: envioDados
    })
    .then((response)=>response.json())
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = resposta(json.valor,json.anos,json.prestacao,json.resultado)
    })


}



function coletarDados(){
    let dadosSimulacao = Array
    dadosSimulacao[0] = document.querySelector('#valorCasa').value
    dadosSimulacao[1] = document.querySelector('#salarioComprador').value
    dadosSimulacao[2] = document.querySelector('#anosFinanciamento').value

    return dadosSimulacao
}


function resposta(valor,anos,prestacao,resultado){
    let valorFormat = valor.toLocaleString('pt-br',{style:'currency',currency:'BRL'})

    let prestacaoFormat = prestacao.toLocaleString('pt-br',{style:'currency',currency:'BRL'})

    return `Para pagar um imóvel de ${valorFormat} e em ${anos} anos, a prestação será de ${prestacaoFormat}.<br>Empréstimo ${resultado}`
}

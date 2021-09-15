function api(){
    let opcaoEscolhida = document.querySelector('input[name=tipoConversao]:checked').value

    let numInserido = document.querySelector('#numConverter').value

    let envioDados = new FormData
    envioDados.append('opcao',opcaoEscolhida)
    envioDados.append('numero',numInserido)

    fetch('server.php',{
        method:'post',
        body: envioDados
    })
    .then((response)=>response.json())
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = `O número ${json.numeroDigitado} convertido para ${json.nomeConversao} é igual a ${json.numeroConvertido}`
        limparCampos()
    })
}

function limparCampos(){
    document.querySelector('#numConverter').value = ''
}
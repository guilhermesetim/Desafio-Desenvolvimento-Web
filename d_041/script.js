function api(){
    let anoNascimento = document.querySelector('#anoNascimento').value 

    let envioDados = new FormData
    envioDados.append('anoNascimento',anoNascimento)

    fetch('server.php',{
        method: 'post',
        body: envioDados

    })
    .then((response)=>response.json())
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = `O atleta tem ${json.idade} anos.<br>Classificação: ${json.categoria}`
    })
}
function api(){
    let anoNascimento = document.querySelector('#anoNascimento').value

    envioDados = new FormData()
    envioDados.append('anoNasc',anoNascimento)

    fetch('server.php',{
        method: 'post',
        body: envioDados
    })
    .then((response)=>response.json())
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = json.resultado
    })
}
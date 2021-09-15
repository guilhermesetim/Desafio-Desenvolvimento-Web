function analiseTriangulo(){
    let lado = Array
    lado[0] = document.querySelector('#segmento1').value
    lado[1] = document.querySelector('#segmento2').value
    lado[2] = document.querySelector('#segmento3').value

    let envioDados = new FormData()
    for(i=0;i<=2;i++){
        envioDados.append(`lado${i}`,lado[i])
    }

    fetch('server.php',{
        method:'post',
        body: envioDados
    })
    .then((response)=>response.json())
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = `Os segmentos acima ${resultado(json.resposta)} formar triângulo`
        limparCampos()
        
    })
}

function resultado(jsonLogico){
    if (jsonLogico == 1){
        return 'podem'
    } else {
        return 'não podem'
    }
}
function limparCampos(){
    document.querySelector('#segmento1').value = ''
    document.querySelector('#segmento2').value = ''
    document.querySelector('#segmento3').value = ''
}

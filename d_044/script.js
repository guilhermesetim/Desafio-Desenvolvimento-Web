function api(){
    let preco = document.querySelector('#compra').value
    let formaPagamento = document.querySelector('input[name="formPag"]:checked').value
    
    let envioDados = new FormData
    envioDados.append('preco',preco)
    envioDados.append('formaPagamento',formaPagamento)

    fetch('server.php',{
        method:'post',
        body: envioDados
    })
    .then((response)=>response.json())
    .then((json)=>{

        document.querySelector('#respostaDados').innerHTML = `Sua compra de ${json.precoAnterior.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}<br>Vai custar ${json.precoPosterior.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`
    })
}
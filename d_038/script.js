function api(){
    
    valor1 = document.querySelector('#num1').value
    valor2 = document.querySelector('#num2').value

    let envioDados = new FormData
    envioDados.append('valor1',valor1)
    envioDados.append('valor2',valor2)

    fetch('server.php',{
        method:'post',
        body: envioDados
    })
    .then((response)=>response.json())
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = json.comparacao
    })
}
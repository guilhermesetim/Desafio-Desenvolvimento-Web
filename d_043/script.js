function api(){
    let altura = document.querySelector('#altura').value 
    let peso = document.querySelector('#peso').value

    let envioDados = new FormData
    envioDados.append('altura',altura)
    envioDados.append('peso',peso)

    fetch('server.php',{
        method: 'post',
        body: envioDados
    })
    .then((response)=>response.json())
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = `Você está na categoria: ${json.categoria}`
    })
}
function valores() {
    let v1 = document.querySelector('#v1').value 
    let v2 = document.querySelector('#v2').value
    let v3 = document.querySelector('#v3').value

    let envioDados = new FormData
    envioDados.append('v1',v1)
    envioDados.append('v2',v2)
    envioDados.append('v3',v3)

    fetch('server.php',{
        method: 'post',
        body: envioDados
    })
    .then((response)=>response.json())
    .then((json)=>{
        r = `O menor valor digitado foi ${json.menor}<br>`
        r += `O maior valor digitado foi ${json.maior}`
        document.querySelector('#respostaDados').innerHTML = r
    })
}
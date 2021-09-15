function viagem(event){

    let km = document.querySelector('#km').value 

    let setDados = new FormData()
    setDados.append('km',km)

    fetch('server.php',{
        method: 'post',
        body: setDados
    })
    .then((response)=>response.json())
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = `O preço para uma viagem de ${json.km} km, será de ${json.valor.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`
        document.querySelector('#km').value = ''
    })
}
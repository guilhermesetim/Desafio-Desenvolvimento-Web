function hipot(){
    let dados = {
        catOposto:document.querySelector('input#co').value,
        catAdjacente:document.querySelector('input#ca').value
    }

    let data = new FormData()
    data.append('catOposto',dados.catOposto)
    data.append('catAdjacente',dados.catAdjacente)
    
    fetch('server.php', {
        method: 'post',
        body: data
    })
    .then((response)=>{
        return response.json()
    })
    .then((json)=>{
        document.querySelector('div#respostaDados').innerHTML = `A hipotenusa vale ${json.hip}` 
    })
    
}
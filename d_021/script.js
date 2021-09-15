function play(){
    let escolha = document.querySelector('input[name=esc]:checked').value

    let dados = {
        esc : escolha
    }

    let envio = new FormData()
    envio.append('esc',dados.esc)

    fetch('server.php',{
        method:'post',
        body:envio
    })
    .then((response)=>response.json())
    .then((json)=>{
    
        var music = document.createElement('source')
        music.setAttribute('src',`${json.escolha}`)
        music.setAttribute('id','musicaEscolhida')
        document.querySelector('#audio').appendChild(music)
        
        
    })
}


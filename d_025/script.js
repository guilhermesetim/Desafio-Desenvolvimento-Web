function silva(){
    const nome = document.querySelector('#nome').value.trim() 

    if(!!nome.match(/[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+\s[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/i)){
        
        let envio = new FormData()
        envio.append('nome',nome)

        fetch('server.php',{
            method:'post',
            body: envio
        })
        .then((response)=>response.json())
        .then((json)=>{
            document.querySelector('#respostaDados').innerHTML = `Seu nome ${json.nome} Silva.`
            document.querySelector('#nome').value = ''
        })

    } else {
        alert('Digite seu nome completo, por favor!')
    }
}
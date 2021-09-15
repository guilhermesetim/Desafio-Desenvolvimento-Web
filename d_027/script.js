document.querySelector('#enviar').addEventListener('click',nome)

function nome(){
    let nome = document.querySelector('#nome').value.trim()

    if(!!nome.match(/[A-Za-z]+\s[A-Za-z]+/i) == true){

        let envio = new FormData()
        envio.append('nome',nome)

        fetch('server.php',{
            method:'post',
            body: envio
        })
        .then((response)=>response.json())
        .then((json)=>{
            resp = "Muito prazer em te conhecer!"
            resp += `<br>Seu primeiro nome é ${json.p}.`
            resp += `<br>Seu último nome é ${json.u}.`
            document.querySelector('#respostaDados').innerHTML = resp
            document.querySelector('#nome').value = ''
        })
    } else{
        alert('Por favor, digite seu nome completo!')
    }

    
}
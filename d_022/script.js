function ir(){
    let nome = document.querySelector('#nome').value.trim()

    function valida(n){
        return !!n.match(/[A-Z][a-z]* [A-Z][a-z]*/)
    }

    if (valida(nome) == true){

        let envio = new FormData()
        envio.append('n',nome)
    

        fetch('server.php',{
            method: 'POST',
            body: envio
        })
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
            resp = "Analisando seu nome..."
            resp+=`<br>Seu nome em maiúsculas é ${json.maiuscula}.`
            resp+=`<br>Seu nome m minúsculas é ${json.minuscula}.`
            resp+=`<br>Seu nome tem ao todo ${json.letras} letras.`
            resp+=`<br>Seu primeiro nome é ${json.primeiro}.`

            document.querySelector('#respostaDados').innerHTML = resp

            document.querySelector('#nome').value = ''
        })


    }else{alert('Por favor, escreva seu nome completo corretamente')
        document.querySelector('#nome').value = ''}
    

    
    
}
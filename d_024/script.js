document.querySelector('#bt').addEventListener('click',regEx)

function regEx(){
    let local = document.querySelector('#cidade').value.trim()
    
    if(!!local.match(/([A-Z][a-z]+\s{1,})-(\s[A-Z]{2})/i) == true){
        
        let envio = new FormData()
        envio.append('local',local)

        fetch('server.php',{
            method:'post',
            body:envio
        })
        .then((response)=>response.json())
        .then((json)=>{
            document.querySelector('#respostaDados').innerHTML = `Você nasceu no estado: ${json.est}`
        })





    } else {
        alert('Por favor, digite o nome e estado corretamente.\nEx: Curitiba - PR')
    }
}
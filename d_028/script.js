document.querySelector('#bt').addEventListener('click',palpite)

function palpite(e){
    e.preventDefault()
    let num = document.querySelector('#num').value
    

    if(!!num.match(/^[0-5]$/)==true){

        document.querySelector('#bt').value = 'Processando...'

        let envio = new FormData()
        envio.append('num',num)

        fetch('server.php',{
            method: 'post',
            body: envio
        })
        .then((response)=>response.json())
        .then((json)=>{

            setTimeout(()=>{
                document.querySelector('#respostaDados').innerHTML = json.status
                document.querySelector('#bt').value = 'Enviar'
                document.querySelector('#num').value = ''
            },2000)
        })

    } else{
        alert('Por favor, digite apenas um número entre 0 e 5')
        document.querySelector('#num').value = ''
    }
}
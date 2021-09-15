document.querySelector('#sorteio').addEventListener('click',sortear)

function sortear(){
    
    let dados = {
        a1: document.querySelector('#a1').value,
        a2: document.querySelector('#a2').value,
        a3: document.querySelector('#a3').value,
        a4: document.querySelector('#a4').value
    }

    let envio = new FormData()
    envio.append('a1', dados.a1)
    envio.append('a2', dados.a2)
    envio.append('a3', dados.a3)
    envio.append('a4', dados.a4)
    
    
    fetch('server.php',{
        method: 'post',
        body: envio
    })
    .then((response)=>response.json())
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = `O aluno sorteado foi ${json.s}`
    })
}
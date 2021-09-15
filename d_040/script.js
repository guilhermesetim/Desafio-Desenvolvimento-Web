function api(){
    let nota1 = document.querySelector('#nota1').value
    let nota2 = document.querySelector('#nota2').value


    if (nota1 <= 10 && nota2 <= 10){
        

        let envioDados = new FormData()
        envioDados.append('nota1',nota1)
        envioDados.append('nota2',nota2)

        fetch('server.php',{
            method: 'post',
            body: envioDados
        })
        .then((response)=>response.json())
        .then((json)=>{
            document.querySelector('#respostaDados').innerHTML = `Com média ${json.media.toFixed(1)}.<br>O aluno está ${json.status}.`
        })
    } else {
        alert ('Digite um entre 0 e 10')
        limparCampos()
        
    }
}

function limparCampos(){
    document.querySelector('#nota1').value = ''
    document.querySelector('#nota2').value = ''
}
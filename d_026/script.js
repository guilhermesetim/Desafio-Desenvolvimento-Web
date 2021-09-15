document.querySelector('#enviar').addEventListener('click',a)

function a(){
    let frase = document.querySelector('#a').value.trim()

    let envio = new FormData()
    envio.append('frase',frase)

    fetch('server.php',{
        method:'post',
        body:envio
    })
    .then((response)=>response.json())
    .then((json)=>{
        resp = `A letra A aparece ${json.vezes} vezes.`
        resp += `<br>A primeira letra A aparece na posição ${json.primeira}.`
        resp += `<br>A ultima letra A aparece na posição ${json.ultima}.`
        document.querySelector('#respostaDados').innerHTML = resp
    })
}
document.querySelector('#sorteio').addEventListener('click',sortear)

function sortear(){
    let dados = {
        a0 : document.querySelector('#a1').value,
        a1 : document.querySelector('#a2').value,
        a2 : document.querySelector('#a3').value,
        a3 : document.querySelector('#a4').value
    }

    let data = new FormData()
    data.append('a0',dados.a0)
    data.append('a1',dados.a1)
    data.append('a2',dados.a2)
    data.append('a3',dados.a3)

    protocolo = {
        method:'post',
        body:data
    }

    fetch('server.php',protocolo)
    .then((response)=>response.json())
    .then((json)=>{
        let pos = 1
        var resp = "A ordem de apresentação: "
        for (let item in json){
            resp += `<br>${pos}° apresentar = ${json[item]}`
            pos++
        }
        document.querySelector('#respostaDados').innerHTML = resp

    })
}
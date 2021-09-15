document.querySelector('input#a').addEventListener('input',angulo)


function angulo(){
    let valor = document.querySelector('input#a').value
    if(valor == ''){
        valor = 0
    }
    let dados = {
        angulo:valor
    }

    let data = new FormData()
    data.append('angulo',dados.angulo)

    fetch('server.php',{
        method:'post',
        body: data
    })
    .then((response)=> response.json())
    .then((json)=>{
        document.querySelector('span#s').innerHTML = json.s
        document.querySelector('span#c').innerHTML = json.c
        document.querySelector('span#t').innerHTML = json.t
        for(i=0;i<=2;i++){
            document.querySelectorAll('.a')[i].innerHTML = json.a
        }
            
    })
}
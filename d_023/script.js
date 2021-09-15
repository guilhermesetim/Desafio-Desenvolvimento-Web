document.querySelector('#calc').addEventListener('click',calc)

function calc(){
    let num = document.querySelector('#n').value
    

    if((!!num.match(/^[\d]{1,4}$/)) == true){
        
        let envio = new FormData()
        envio.append('num',num)

        fetch('server.php',{
            method: 'post',
            body:envio
        })
        .then((response)=>response.json())
        .then((json)=>{
            resp = `Analisando o número: ${json.num}.`
            resp += `<br>Unidade: ${json.u}.`
            resp += `<br>Dezena: ${json.d}.`
            resp += `<br>Centena: ${json.c}.`
            resp += `<br>Milhar: ${json.m}.`

            document.querySelector('#respostaDados').innerHTML = resp
        })



    } else {
        alert('Digite um algarismo entre 0 e 9999')
        document.querySelector('#n').value = ''
    }
}
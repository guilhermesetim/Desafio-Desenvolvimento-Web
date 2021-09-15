document.querySelector('#bt').addEventListener('click',multa)

function multa(){
    let km = document.querySelector('#km').value 
    
    if(!!km.match(/^[\d]+(.\d{1,})?$/) == true){

        let envio = new FormData()
        envio.append('km',km)
        
        fetch('server.php',{
            method: 'post',
            body: envio
        })
        .then((response)=>response.json())
        .then((json)=>{

            if(json.status == true){
                document.querySelector('#respostaDados').innerHTML = `MULTADO! Você excedeu o limite de velocidade permitido de 80km/h<br>Você deve pagar uma multa de ${json.multa.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`
                document.querySelector('#respostaDados').style.color = 'red'
            }
            document.querySelector('#padrao').innerHTML += 'Tenha uma boa viagem!'
        })


    } else {
        alert ('Por favor, digite uma velocidade válida!')
        document.querySelector('km').value = ''
    }
}
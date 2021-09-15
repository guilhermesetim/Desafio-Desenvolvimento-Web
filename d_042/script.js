function api(){
    let segmentos = coletaDados()

    fetch('server.php',{
        method: 'post',
        body: segmentos
    })
    .then((response)=>response.json())
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = `Os segmentos acima ${json.validade} formar um triângulo${json.tipo}.`
    })
    
}







function coletaDados(){

    segLista = Array
    envioDados = new FormData


    for (i=1;i<=3;i++){
        segLista[i] = (document.querySelector(`#segmento${i}`).value)
        envioDados.append(`segmento${i}`,segLista[i])
    }

    return envioDados
}
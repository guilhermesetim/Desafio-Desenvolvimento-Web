document.querySelector('#campo').addEventListener('input',api)

function api(){
    let opcao = document.querySelector('input[name="opcao"]:checked').value 

    let envioDados = new FormData
    envioDados.append('opcao',opcao)

    fetch('server.php',{
        method: 'post',
        body: envioDados
    })
    .then((response)=>response.json())
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = `Tirei: ${json.comp}<br>Resultado: ${json.result}`

        
        let limparCampoRadios = document.getElementsByName("opcao");
        for(i=0;i<limparCampoRadios.length;i++){
           limparCampoRadios[i].checked = false;
        }
    })

}
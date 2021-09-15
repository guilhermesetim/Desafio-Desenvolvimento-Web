function int(){

    let dados = {
        real: document.querySelector('#n').value
    }

    //document.querySelector('#n').value('')

    let dataForm = new FormData();
    dataForm.append('real',dados.real);
    

    fetch('server.php',{
        method:'post',
        body: dataForm
    })
    .then((response)=>{
        return response.json()
    })
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = `O valor digitado foi ${json.real} e sua porção inteira é ${json.int}.`
        
    })
    

}
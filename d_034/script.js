function aumento(){
    let salario = document.querySelector('#sal').value
    if(!!salario.match(/^([\d]+).([\d]{1,2})$/g) == true){

        let envioDados = new FormData
        envioDados.append('salario',Number(salario))

        fetch('server.php',{
            method: 'post',
            body: envioDados
        })
        .then((response)=>response.json())
        .then((json)=>{
            document.querySelector('#respostaDados').innerHTML = `Quem ganhava ${json.ant.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}, passa a ganhar ${json.aum.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.`
        })
        
    } else {
       alert('Digite o salário corretamente')
       document.querySelector('#sal').value = ''
    }
        
}
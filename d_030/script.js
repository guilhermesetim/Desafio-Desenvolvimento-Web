function par_impar(){
    let num = document.querySelector('#n').value

    let setData = new FormData()
    setData.append('num',num)

    fetch('server.php',{
        method:'post',
        body: setData
    })
    .then((response)=>response.json())
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = `O número ${json.num} é ${json.paridade}`
    })
}
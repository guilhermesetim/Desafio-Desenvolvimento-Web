document.querySelector('#sim').addEventListener('click',atual)
document.querySelector('#nao').addEventListener('click',outroAno)



function atual() {

    let envioDados = new FormData()
    envioDados.append('valor','')

    fetch('server.php',{
        method: 'post',
        body: envioDados
    })
    .then((response)=>response.json())
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = `O ano de ${json.ano} ${json.be}é BISSEXTO!`

    })
}

function outroAno() {
    // elemnte Span
    var inputSpan = document.createElement('span')
    inputSpan.setAttribute('id','inputAno')
    document.querySelector('#campo').appendChild(inputSpan)


    // element Input Number
    var inputNumber = document.createElement('input')
    inputNumber.setAttribute('type','number')
    inputNumber.setAttribute('id','anoAnalise')
    inputNumber.setAttribute('placeholder','Por favor, digite o ano')

    // element Button
    document.querySelector('#inputAno').appendChild(inputNumber)

    var inputButton = document.createElement('input')
    inputButton.setAttribute('type','button')
    inputButton.setAttribute('id','btAno')
    inputButton.setAttribute('value','Analisar')

    document.querySelector('#inputAno').appendChild(inputButton)

    // API
    document.querySelector('#btAno').addEventListener('click',analiseOutroAno)
    
}

function analiseOutroAno(){
    
    let valor = document.querySelector('#anoAnalise').value

    let envioDados = new FormData()
    envioDados.append('valor',valor)
    
    fetch('server.php',{

        method: 'post',
        body: envioDados
    })
    .then((response)=>response.json())
    .then((json)=>{
        document.querySelector('#respostaDados').innerHTML = `O ano de ${json.ano} ${json.be}é BISSEXTO!`
    })
}

$('#form').submit((e)=>{
    e.preventDefault()

    let dados = {
        dias:$('#d').val(),
        km:$('#k').val()
    }

    $.ajax({
        url:'server.php',
        method:'post',
        dataType:'json',
        data:dados

    }).done((resp)=>{
        let v = Number(resp.p).toLocaleString('pt-br',{style:'currency',currency:'BRL'})

        document.querySelector('div#respostaDados').innerHTML = `Alugado por ${resp.dias} dias e rodado ${resp.km} km.<br>O total a pagar é ${v}.`
        $('#d').val('')
        $('#k').val('')
    })
})
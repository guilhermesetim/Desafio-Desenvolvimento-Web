$('#converter').click(function(){
    $('#converter').val('convertendo...')
    $.ajax({
        url:'server.php',
        method:'post',
        data:{
            'moeda':$('#d').val()
        }
    }).done(function(response){
        //Conversão para reais
        reais = Number(document.querySelector('input#d').value).toLocaleString('pt-br',{style:'currency',currency:'BRL'})

        //Conversão para dolar
        dolar = Number(response).toLocaleString('pt-br',{style: 'currency', currency: 'USD'})

        //Escrever resposta
        document.querySelector('div#respostaDados').innerHTML = `Com R$ ${reais} você pode comprar ${dolar}`

        //limpar campos
        $('#converter').val('converter')
        $('#d').val('')
    })
})
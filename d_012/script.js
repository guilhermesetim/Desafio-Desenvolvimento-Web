$('#calcular').click(()=>{
    $.ajax({
        url:'server.php',
        method:'post',
        dataType:'json',
        data:{
            p:$('#p').val()
        }
    }).done((resp)=>{
        let anterior = Number(resp.precoAnt).toLocaleString('pt-br',{style:'currency',currency:'BRL'})

        let atual = Number(resp.precoAtual).toLocaleString('pt-br',{style:'currency',currency:'BRL'})


        document.querySelector('div#respostaDados').innerHTML = `O produto que custava ${anterior}, na promoção com desconto de ${resp.desc}% vai custar ${atual}.`
    })
})
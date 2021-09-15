$('#calcular').click(()=>{
    $.ajax({
        url:'server.php',
        method: 'post',
        dataType:'json',
        data:{
            s:$('#s').val()
        }
    }).done((resp)=>{
        let ant = Number(resp.salAnt).toLocaleString('pt-br',{style:'currency',currency:'BRL'})

        let atual = Number(resp.salAtual).toLocaleString('pt-br',{style:'currency',currency:'BRL'})

        document.querySelector('div#respostaDados').innerHTML = `Um funcionário que ganhava ${ant}, com ${resp.porc}% de aumento, passa a receber ${atual}`
    })
})
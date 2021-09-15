$('#calcular').click(()=>{
    $('#calcular').val('Calculando...')
    $.ajax({
        url:'server.php',
        method: 'post',
        data:{
            'medida':$('#m').val()
        }
    }).done(function(response){
        document.querySelector('div#respostaDados').innerHTML = response
        $('#calcular').val('Calcular')
        $('#m').val('')
    })
})
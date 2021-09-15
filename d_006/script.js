$('#calcular').click(function(e){
    e.preventDefault()
    $('#calcular').val('Calculando...')

    $.ajax({
        url:'server.php',
        type:'get',
        data:{
            'num':$('#n').val()
        }
    }).done(function(data){
        document.querySelector('div#respostaDados').innerHTML = data
        $('#calcular').val('Calcular')
    })
})
$('#formu').submit(function(evento){
    evento.preventDefault()
    $('#calcular').val('Calculando...')

    $.ajax({
        url:'server.php',
        type:'post',
        data:{
            'num1':$('#n1').val(),
            'num2':$('#n2').val()
        }
    }).done(function(data){
        document.querySelector('div#respostaDados').innerHTML = data
        $('#calcular').val('Calcular')
        $('#n1').val('')
        $('#n2').val('')
    })
})
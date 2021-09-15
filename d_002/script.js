$('#formulario').submit(function(evento){
    evento.preventDefault()
    $('#enviar').val('Enviando...')

    $.ajax({
        url:'server.php',
        type:'post',
        data:{
            'nome':$('#n').val()
        }
    }).done(function(data){
        document.querySelector('div#respostaDados').innerHTML = data
        $('#n').val('')
        $('#enviar').val('Enviar')
    })
})
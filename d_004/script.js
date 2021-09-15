$('#formulario').submit(function(evento){
    evento.preventDefault()
    $('#analisar').val('Analisando...')

    $.ajax({
        url:'server.php',
        type:'post',
        data:{
            'variavel':$('#v').val()
        }
    }).done(function(data){
        document.querySelector('div#respostaDados').innerHTML = data
        $('#analisar').val('Analisar')
        
    })
})
$('#form').submit(function(evento){
    evento.preventDefault()

    $.ajax({
        url:'server.php',
        type:'get',
        data:{
            'num':$('#n').val()
        }
    }).done(function(data){
        document.querySelector('div#respostaDados').innerHTML = data
    })
})
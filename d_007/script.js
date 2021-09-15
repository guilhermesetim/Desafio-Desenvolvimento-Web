$('#calcular').click(function(){
    $.ajax({
        url:'server.php',
        type:'post',
        data:{
            'nota1':$('#n1').val(),
            'nota2':$('#n2').val()
        }
    }).done(function(data){
        document.querySelector('div#respostaDados').innerHTML = data
    }).fail().always()
})
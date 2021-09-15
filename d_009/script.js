$('#tabular').click(function(){
    $('#tabular').val('calculando...')
    document.querySelector('select#tabuadaResposta').innerHTML = ''
    for(i=1;i<=10;i++){
        $.ajax({
            async:false,
            url:'server.php',
            method:'post',
            data:{
                'tab':$('#tab').val(),
                'mult': i   
        }    
        }).done(function(response){
            item = document.createElement('option')
            item.text = response
            document.querySelector('select#tabuadaResposta').appendChild(item)
        })
    }
    $('#tabular').val('tabular')
})
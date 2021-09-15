$('#orcar').click(()=>{
    $.ajax({
        url:'server.php',
        method:'post',
        dataType: 'json',
        data:{
            'l':$('#l').val(),
            'a':$('#a').val()
        }
    }).done(function(response){
        document.querySelector('div#respostaDados').innerHTML = `Sua parede tem a dimensão de ${response.largura} x ${response.altura} e sua área é de ${response.area}m².<br>Para pinta essa parede, você precisará de ${response.litros}L de tinta.`
    })
})
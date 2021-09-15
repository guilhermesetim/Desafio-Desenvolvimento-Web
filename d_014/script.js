$('#converter').click(()=>{
    $.ajax({
        url:'server.php',
        method:'post',
        dataType:'json',
        data:{
            t:$('#t').val()
        }
    }).done((dados)=>{
        document.querySelector('div#respostaDados').innerHTML = `A temperatura de ${dados.celsius}°C corresposnde a ${dados.fahren}°F`
    })
})
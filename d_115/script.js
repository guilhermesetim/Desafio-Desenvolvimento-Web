document.querySelector('#buttonExecut').addEventListener('submit',function(event){
    event.preventDefault()
    
    let valueOption = document.querySelector('input[name="optionSelect"]:checked').value
    
    checkOptions(valueOption);

})



function showDataBase(){
    alert('Mostrar Usuários')
}


function newCadastre(){
    document.querySelector('#respostaDados').innerHTML = 
    `
    <form>
    <label for="nomeUsr">Nome:</label>
    <input type="text" name="nomeUsr" id="nomeUsr" required>
    <label for="nomeUsr">Idade:</label>
    <input type="number" min="0" max="9999" name="idadeUsr" id="idadeUsr" required>
    <input type="submit" value="Enviar">
    </form>
    `
}

function exit(){
    alert('Programa finalizado')
}



function checkOptions(option){
    switch(option){
        case 'showUsr':
            showDataBase()
            break
        
        case 'newUsr':
            newCadastre()
            break

        case 'exit':
            exit()
            break
        default:
            alert('Opção inválida!')
    }
}
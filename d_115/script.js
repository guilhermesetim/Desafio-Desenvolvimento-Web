document.querySelector('#buttonExecut').addEventListener('submit',function(event){
    event.preventDefault()
    
    let valueOption = document.querySelector('input[name="optionSelect"]:checked').value
    
    checkOptions(valueOption);

})



function showDataBase(){
    alert('Mostrar Usuários')
}


function newCadastre(){
    alert('Cadastrar')
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
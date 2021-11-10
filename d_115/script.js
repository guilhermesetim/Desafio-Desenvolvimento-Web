document.querySelector('#buttonExecut').addEventListener('submit',function(event){
    event.preventDefault()
    
    let valueOption = document.querySelector('input[name="optionSelect"]:checked').value
    alert(valueOption);
})
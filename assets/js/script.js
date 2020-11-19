const form = document.getElementById('form')
form.addEventListener('click', handleSubmit)

function handleSubmit(event){
    event.preventDefault();

    const gender = getSelectedValue('gender')
    const age = document.getInputValue('age')
    const weight = document.getInputValue('weight')
    const height = document.getInputValue('height')

    alert(gender)
}


function getSelectedValue(id){
    const select = document.getElementById(id)

    return select.options[select.selectedIndex].value
}


function getInputValue(id){
    return Number(document.getElementById(id).value)
}

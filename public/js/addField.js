//Procurar o botão 
document.querySelector("#add-time").addEventListener('click', cloneField)


//Executar ação
function cloneField () {
    //Duplicar o campo schedule-item 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //Limpar os campos de horários
    const fields = newFieldContainer.querySelectorAll('input');

    fields.forEach (function (field) {
        //pegar o field do momento e limpar os campos
        field.value = ""
    })

    //Inserir na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}

    
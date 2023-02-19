const form = document.querySelector("#form");
const nameInput = document.querySelector ("#name");
const emailInput = document.querySelector("#email");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
        event.preventDefault();

    // Verifica se o nome esta vazio
    if(nameInput.value ===""){
        alert("Por favor preencha com seu seu nome");
        return;
    }
    //Verifica se o email preenchido é valido

    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor preencha o seu email");
        return;
    }

    if(messageTextarea.value === "") {
     alert("Por favor, preencha o campo");
     return;

    }

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});


function isEmailValid(email) {
    //criação de uma regex para valkidar o email

    const emailRegex = new RegExp(

        //usuario12@host.com
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.teste(email)) {
        return true;
    }

    return false;
}

console.log(form);
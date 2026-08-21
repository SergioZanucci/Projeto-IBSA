const listaProfessores = [
    {
        nome: "Sergio Henrique Zanucci",
        email: "sergiozanu@gmail.com",
        senha: 235382
    },
    {
        nome: "Vini Teodoro",
        email: "viniteodoro@gmail.com",
        senha: 123456
    },
    {
        nome: "Jucirleide Zanucci",
        email: "juzanucci@gmail.com",
        senha: 678910
    }   
];


const inputEmail = document.querySelector("#login-ensino-email");
const inputSenha = document.querySelector("#login-ensino-senha");
const botao = document.querySelector("#login-button");
const msgDeErro = document.querySelector("#error-message");

function autenticarProfessor(email, senha) {
    for(let i = 0; i < listaProfessores.length; i++) {

        if(listaProfessores[i].email === email && listaProfessores[i].senha === Number (senha)) {
            // console.log("Professor encontrado");
            // console.log(listaProfessores[i].nome);

            localStorage.setItem("professorNome", listaProfessores[i].nome);
            localStorage.setItem("professorEmail", listaProfessores[i].email);

            window.location.href = "Pages/professores.html";
            return;  
        }

       
       
    }
    msgDeErro.innerHTML = "Email ou senha invalido"
};


botao.addEventListener("click", (event) => {
    event.preventDefault();
    autenticarProfessor(inputEmail.value, inputSenha.value);
});

 


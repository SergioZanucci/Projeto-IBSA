const professorNome = localStorage.getItem("professorNome");
const professorEmail = localStorage.getItem("professorEmail");

if (!professorNome || !professorEmail) {
    window.location.href = "../login-ensino.html"
}
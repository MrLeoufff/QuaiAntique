const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Ici il faudra appeller l'API pour vérifier les credentials en BDD

    if (mailInput.value == "reneleliard@gmail.com" && passwordInput.value == "Renstel#84") {
        alert ("Vous etes co")
        // Il faudra récupéré le vrai tocken
        const tocken = "qsdfghqsdfghqsdfghqsdfghqsdfgh";

        // placer le tocken en cookie

        window.location.replace("/");
    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}

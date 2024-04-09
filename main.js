document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Congratulations! Your request has been sent successfully ;D");
        formulario.reset()
        
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        Swal.fire(
            'Good Job',
            'Your request was sent successfully!',
            'success'
        )
        formulario.reset()
    });
});


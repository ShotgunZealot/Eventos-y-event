document.addEventListener('DOMContentLoaded', function () {
    const elemento = document.getElementById('elemento');

    elemento.addEventListener('click', function () {
        this.classList.toggle('estilo-alternativo');
    });
});

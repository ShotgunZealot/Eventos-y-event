document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('#lista-tareas input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                this.parentNode.classList.add('completada');
            } else {
                this.parentNode.classList.remove('completada');
            }
        });
    });
});

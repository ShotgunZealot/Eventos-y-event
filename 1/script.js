document.addEventListener('DOMContentLoaded', function () {

    const botonCambiarColor = document.getElementById('cambiar-color');
    const elementoACambiar = document.getElementById('elemento-a-cambiar');

    botonCambiarColor.addEventListener('click', function () {
        elementoACambiar.style.backgroundColor = getRandomColor();
    });
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
})
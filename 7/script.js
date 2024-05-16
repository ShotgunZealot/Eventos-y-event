document.addEventListener('DOMContentLoaded', function () {
    const temporizadorElemento = document.getElementById('temporizador');

    let tiempoRestante = 10;

    function actualizarTemporizador() {
        if (tiempoRestante > 0) {
            temporizadorElemento.textContent = `Tiempo restante: ${tiempoRestante-1} segundos`;
            tiempoRestante--;
        } else {
            alert('¡Tiempo finalizado!');

            clearInterval(temporizadorIntervalo);
        }
    }

    const temporizadorIntervalo = setInterval(actualizarTemporizador, 1000);
});

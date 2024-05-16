document.addEventListener('DOMContentLoaded', function () {
    const elemento = document.getElementById('elemento');
    let offsetX, offsetY, isDragging= false;

    elemento.addEventListener('mousedown', function (event) {
        isDragging = true;
        offsetX = event.clientX - elemento.getBoundingClientRect().left;
        offsetY = event.clientY - elemento.getBoundingClientRect().top;
        console.log(offsetX,offsetY);   
        elemento.style.cursor = 'grabbing';

        document.addEventListener('mousemove', dragElement);
    });

    function dragElement(event) {
        if (isDragging){
        let newX = event.clientX - offsetX;
        let newY = event.clientY - offsetY;
        elemento.style.left = newX + 'px';
        elemento.style.top = newY + 'px';
        }
    }

    document.addEventListener('mouseup', function () {
        isDragging=false;
        elemento.style.cursor = 'grab';
    });
});

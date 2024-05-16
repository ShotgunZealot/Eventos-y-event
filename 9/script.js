document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'r' || event.key === 'R') {
            document.body.style.backgroundColor = 'red';
        } else if (event.key === 'g' || event.key === 'G') {
            document.body.style.backgroundColor = 'green';
        } else if (event.key === 'b' || event.key === 'B') {
            document.body.style.backgroundColor = 'blue';
        }
    });
    document.addEventListener('keyup', function () {
        document.body.style.backgroundColor = 'white';
    });
});

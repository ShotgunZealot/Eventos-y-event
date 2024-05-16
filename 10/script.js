document.addEventListener('DOMContentLoaded', function () {
    let parallaxElement = document.getElementById('parallax');

    // window.addEventListener('scroll', function () {
    // const speed = 0.5; 
    // const yOffset = window.scrollY; 
    // const newPosition = yOffset * speed;
    // parallaxElement.style.transform = `translateY(${newPosition}px)`;
    // });
    function scrollParalax(){
        let speed = -0.3;
        let scrolltop = document.documentElement.scrollTop;
        parallaxElement.style.transform = 'translateY(' + scrolltop * speed + 'px)';
    }
    window.addEventListener('scroll', scrollParalax);
});

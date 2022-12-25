const aniBtn = document.querySelector('#animation');

aniBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    aniBtn.style.setProperty('top',randomY+'%');
    aniBtn.style.setProperty('left',randomY+'%');
    aniBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
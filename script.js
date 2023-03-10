const imgGallery = document.querySelector('.image-gallery');
const imgs = document.querySelectorAll('.image');
const displayedSection = document.querySelector('.displayed-image-container');
const displayedImg = document.querySelector('.displayed-image');

imgs.forEach(img => {
    img.addEventListener('click', ()=> {
        displayedImg.src = img.src;
        displayedSection.style.visibility = 'visible';
    })
})

displayedSection.onclick = function(e) {
    if(e.target != displayedImg) {
    displayedSection.style.visibility = 'hidden';
    }
}

document.onkeydown = function(e) {
    if(e.key === "Escape") {
        displayedSection.style.visibility = 'hidden';
    }
}

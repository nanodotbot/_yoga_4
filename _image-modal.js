const modalImages = document.querySelectorAll('.image-modal-image');

const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('image-modal-image');


modalImages.forEach((image, index) => {
    image.onclick = () => {
        let src = image.getAttribute('src');
        current = index;
        modal.classList.add('open');
        modalImage.setAttribute('src', src);
    }
});

modal.onclick = () => modal.classList.remove('open');
modalImage.onclick = e => e.stopPropagation();
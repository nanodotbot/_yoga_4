const previous = document.getElementById('previous');
const next = document.getElementById('next');

let current = 0;

const handlePrevious = () => {
    if(current === 0) {
        current = modalImages.length - 1;
        return;
    }
    current--;
}
const handleNext = () => {
    if(current === modalImages.length - 1) {
        current = 0;
        return;
    }
    current++;
}

previous.onclick = e => {
    e.stopPropagation();
    handlePrevious();
    modalImage.setAttribute('src', modalImages[current].getAttribute('src'));
}
next.onclick = e => {
    e.stopPropagation();
    handleNext();
    modalImage.setAttribute('src', modalImages[current].getAttribute('src'));
}
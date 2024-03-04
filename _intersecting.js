const intersections = document.querySelectorAll('.intersection');

const options = {
    root: null,
    threshold: .6,
    rootMargin: "0px"
};

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            // console.log('intersecting:', entry.target);
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show');
            // console.log('not intersecting:', entry.target);
        }
    })
}, options);

intersections.forEach(intersection => {
    observer.observe(intersection);
})
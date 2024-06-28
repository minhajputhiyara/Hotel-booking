document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const gallerySlider = document.querySelector('.gallery-slider');
    let index = 0;

    nextBtn.addEventListener('click', function () {
        index = (index + 1) % gallerySlider.children.length;
        gallerySlider.style.transform = `translateX(-${index * 100}%)`;
    });

    prevBtn.addEventListener('click', function () {
        index = (index - 1 + gallerySlider.children.length) % gallerySlider.children.length;
        gallerySlider.style.transform = `translateX(-${index * 100}%)`;
    });
});


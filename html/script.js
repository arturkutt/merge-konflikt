let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slideshow img");
    slides.forEach(slide => (slide.style.display = "none"));
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Vaheta iga 3 sekundi järel
}
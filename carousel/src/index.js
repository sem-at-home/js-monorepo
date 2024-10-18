import './styles.css'

let slideIndex = 0;

function showSlide(index) {
  const slides = document.getElementsByClassName('slide')
  const dots = document.getElementsByClassName('dot');
  console.log(slideIndex)
  if (index > slides.length - 1) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].classList.remove('active')
  }
  for (let i = 0; i < dots.length; i += 1) {
    dots[i].classList.remove('active')
  }
  console.log(slides[slideIndex])
  console.log(dots)
  slides[slideIndex].classList.add('active')
  dots[slideIndex].classList.add('active')
}

function plusSlides(number) {
  showSlide(slideIndex += number)
}

showSlide(slideIndex);

const nextButton = document.querySelector('.next');
nextButton.addEventListener('click', () => {
  plusSlides(1)
});

const previousButton = document.querySelector('.previous');
previousButton.addEventListener('click', () => {
  plusSlides(-1)
});

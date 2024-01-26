const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//Je séléctionne la class leftArrow dans mon HTML et j'ajoute un évenement au clique nommé slideLeft
let leftArrow = document.getElementById("leftArrow");
leftArrow.addEventListener("click", slideLeft);

//J'ajoute une fonction de défilement de slide vers la gauche
function slideLeft() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateSlide();
}

//Je séléctionne la class rightArrow dans mon HTML et j'ajoute un évenement au clique nommé slideright
let rightArrow = document.getElementById("rightArrow");
rightArrow.addEventListener("click", slideRight);

//J'ajoute une fonction de défilement de slide vers la droite
function slideRight() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateSlide();
}

//La slide de départ est égale à 0
let currentSlideIndex = 0;

// Je définis la fonction update slide
function updateSlide() {
  // Je sélectionne la class "banner-img" et la stock dans la variable bannerImg
  let bannerImg = document.querySelector(".banner-img");
  // Je sélectionne la class "tagline" et la sotcke dans la variable tagLine
  let tagLine = document.querySelector(".tagline");

  // Je définie le chemin de l'image de la bannière dans le tableau slides pour l'index courant
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
  // Je modifie le contenu HTML de l'élément tagLine en utilisant la description spécifiée dans le tableau slides pour l'index courant
  tagLine.innerHTML = slides[currentSlideIndex].tagLine;
}

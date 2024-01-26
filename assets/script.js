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

// FLECHE GAUCHE

// Je séléctionne la class arrowLeft dans mon HTML et j'ajoute un évenement au clique nommé slideLeft
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", slideLeft);

// J'ajoute la fonction de défilement de slide vers la gauche
function slideLeft() {
  // Calcul de l'index de la diapositive précédente avec défilement infini
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  console.log("Clic sur la flèche gauche");
  // Je mets à jour l'affichage avec la nouvelle diapositive
  updateSlide();
}

// FLECHE DROITE

// Je séléctionne la class arrowRight dans mon HTML et j'ajoute un évenement au clique nommé slideright
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", slideRight);

// J'ajoute la fonction de défilement de slide vers la droite
function slideRight() {
  // Calcul de l'index de la diapositive suivante avec défilement infini
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  console.log("Clic sur la flèche droite");
  // Je mets à jour l'affichage avec la nouvelle diapositive
  updateSlide();
}

// POINTS

const dotsContainer = document.querySelector(".dots");

// J'ajoute les points sur le carousel
slides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  // J'ajoute la class "dot_selected" pour la première diapo
  if (index === 0) {
    dot.classList.add("dot_selected");
  }

  dot.addEventListener("click", function () {
    // Je mets à jour l'index de la diapositive au clic sur un point
    currentSlideIndex = index;
    updateSlide(currentSlideIndex);
    console.log("Clic sur un point" + (index + 1));
  });

  dotsContainer.appendChild(dot);
});

//SLIDER

// La slide de départ est égale à 0
let currentSlideIndex = 0;

// Je définis la fonction update slide
function updateSlide() {
  // Je sélectionne la class "banner-img" et la stock dans la variable bannerImg
  let bannerImg = document.querySelector(".banner-img");
  // Je sélectionne la class "tagline" et la stock dans la variable tagLine
  let tagLine = document.querySelector(".tagline");

  // Je définie le chemin de l'image de la bannière dans le tableau slides pour l'index courant
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
  // Je modifie le contenu HTML de l'élément tagLine en utilisant la description spécifiée dans le tableau slides pour l'index courant
  tagLine.innerHTML = slides[currentSlideIndex].tagLine;

  // Je mets à jour le point correspondant à la diapositive actuelle
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

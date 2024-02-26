const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let baliseArrowLeft = document.querySelector(".arrow_left");
console.log(baliseArrowLeft)

let baliseArrowRight = document.querySelector(".arrow_right");
console.log(baliseArrowRight)

let baliseImage = document.querySelector(".banner-img");

let bannerTagLine = document.querySelector("#banner p");

let currentSlide = 0;

function updateSlides() {
	baliseImage.src = slides[currentSlide].image;
	bannerTagLine.innerHTML = slides[currentSlide].tagLine
}


baliseArrowLeft.addEventListener("click", () => {
	currentSlide --
	console.log(baliseArrowLeft)
	if (currentSlide == -1) {
		currentSlide = 3	
	}
	else {
		
	};	
	updateSlides ();
	console.log(currentSlide)
});

baliseArrowRight.addEventListener ("click", () => {
	currentSlide++
	if (currentSlide >= 4) {
		currentSlide = 0
	}
	else {
	
	};
	updateSlides ();
	console.log(currentSlide)
});

console.log (baliseArrowLeft)

let dotSelected = document.querySelector(".dots")

function dotSelectedSlide() {
	dotSelected.classList.add("dot_selected")
}





let dotsContainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
		dotsContainer.innerHTML += '<div class="dot"></div>';
}
if (i = currentSlide) {
	dotsContainer.innerHTML += '<div class="dot dot_selected></div>';
}

else {
	
}

/*for (let j = 0; currentSlide >= 0; j=currentSlide) {
		dotsContainer.innerHTML += '<div class="dot dot_selected"></div>';
}*/

console.log(dotSelected); 
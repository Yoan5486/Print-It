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

let dotSelected = document.querySelector(".dot_selected");

let currentSlide = 0;
let 


function updateSlides() {
	baliseImage.src = slides[currentSlide].image;
	bannerTagLine.innerHTML = slides[currentSlide].tagLine
	
}

baliseArrowLeft.addEventListener("click", () => {
	currentSlide--
	console.log(baliseArrowLeft)
	updateSlides ();
	
		
});

baliseArrowRight.addEventListener ("click", () => {
	currentSlide++
	updateSlides ();
		
	});


console.log (baliseArrowLeft)



let dotsContainer = document.querySelector(".dots");




for (let i = 0; i < slides.length; i++) {
	 
	dotsContainer.innerHTML += '<div class="dot"></div>';

	
}
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let balisearrow_left = document.querySelector(".arrow_left");
console.log(balisearrow_left)

balisearrow_left.addEventListener("click", () => {
	
	console.log(balisearrow_left)
});

let balisearrow_right = document.querySelector(".arrow_right");
console.log(balisearrow_right)




let balisetxtimage = document.querySelector("#banner p");

let baliseimage = document.querySelector(".banner-img");


balisearrow_right.addEventListener ("click", () => {

		for (let a = 0; a < slides.length; a++) {

			let baliseimage = slides[1];
			baliseimage.src = "assets/images/slideshow/slide2.jpg"
			balisetxtimage.innerHTML --- 'Tirages haute définition grand format <span>pour vos bureaux et events</span>';

		} 
		baliseimage.src = "assets/images/slideshow/slide2.jpg";
		
	
	
});

let dots_container = document.querySelector(".dots");


for (let i = 0; i < slides.length; i++) {
	 
	dots_container.innerHTML += '<div class="dot"></div>'

}

console.log(baliseimage)

console.log(balisearrow_right)

console.log(balisearrow_right)

console.log (balisearrow_left)

/*baliseimage.src = "assets/images/slideshow/slide3.jpg";
	baliseimage.src = "assets/images/slideshow/slide4.jpg";*/
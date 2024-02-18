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




console.log(balisearrow_right)

console.log (balisearrow_left)


let banner_tagline = document.querySelector("#banner p");

let baliseimage = document.querySelector(".banner-img");

let dot_selected = document.querySelector(".dot_selected");

let dots_container = document.querySelector(".dots");

console.log(baliseimage)

for (let i = 0; i < slides.length; i++) {
	 
	dots_container.innerHTML += '<div class="dot"></div>'

	balisearrow_right.addEventListener ("click", () => {
		baliseimage.forEach((img, i) => {
			img.src = "./assets/images/slideshow" + slides[index].image;
			console.log(img.src)
		});

		banner_tagline.innerHTML = slides[index].image = tagLine;
	
})
};
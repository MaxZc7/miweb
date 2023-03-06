window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("pizza", window.scrollY > 0);
	})


window.addEventListener("scroll", function(){
	var icon = document.querySelector(".icon");
	icon.classList.toggle("littleicon", window.scrollY > 0);
	})
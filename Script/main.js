'use strict';
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.getElementById("navbar");
const overlay = document.querySelector(".overlay");
const navItems = document.querySelector(".nav-items");
const navLinks = document.querySelectorAll(".nav-link li");
const text = document.querySelector(".sec-text");

let flag = true;

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");

  flag = !flag;
  if (!flag) {
    overlay.style.transform = "translateY(0)";
    navItems.style.transform = "translateY(0)";
  } else {
    overlay.style.transform = "translateY(100vh)";
    navItems.style.transform = "translateY(-100vh)";
  }
  // overlay.style.background = rgba(10, 10, 10, .75);

  //Animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease-in-out backwards ${
        index / 6 + 0.5
      }s`;
    }
  });
});


// Auto-type Effect

const words = ["Full Stack Developer", "Frontend Developer", "Software Engineer"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 500);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 200);
	};
	loopDeleting();
};

typingEffect();




//----------------Navbar-------------//
window.addEventListener("scroll", () => {
  let navbar = document.getElementById("navbar");
  navbar.classList.toggle("fixed", this.window.scrollY > 0);
});



function scrollActive() {
const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);




const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

ScrollReveal().reveal(`.text-holder`, {origin: 'bottom'})
ScrollReveal().reveal(`.social-icons`, {origin: 'left', delay: 800})
ScrollReveal().reveal(`.rock`, {origin: 'bottom', delay: 600})
ScrollReveal().reveal(`.btn3`, {origin: 'bottom', delay: 600})
ScrollReveal().reveal(`.send`, {origin: 'right', delay: 600})
ScrollReveal().reveal(`.about-col-1`, {origin: 'right', delay: 1000})
ScrollReveal().reveal(`.left-area`, {origin: 'left', delay: 1000})
ScrollReveal().reveal(`.about-header`, {origin: 'bottom', delay: 700})
ScrollReveal().reveal(`.title`, {origin: 'bottom', delay: 500})
ScrollReveal().reveal(`.section_container`, {origin: 'bottom', delay: 1200})

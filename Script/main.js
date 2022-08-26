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

//----------------Navbar-------------//
window.addEventListener("scroll", () => {
  let navbar = document.getElementById("navbar");
  navbar.classList.toggle("fixed", this.window.scrollY > 0);
});

const block = document.querySelectorAll(".block");
addEventListener("load", function () {
  block.forEach((item) => {
    let numElement = item.querySelector(".num");
    let num = parseInt(numElement.innerText);
    let count = 0;
    let time = 2000 / num;
    let circle = item.querySelector(".circle");
    setInterval(() => {
      if (count == num) {
        clearInterval();
      } else {
        count += 1;
        numElement.innerText = count;
      }
    }, time);
    circle.style.strokeDashoffset = 503 - 503 * (num / 100);
    let dots = item.querySelector(".dots");
    dots.style.transform = `rotate(${360 * (num / 100)}deg)`;
    if (num == 100) {
      dots.style.opacity = 0;
    }
  });
});

// let calcScrollValue = () => {
//   let scrollProgress = document.getElementById("progress");
//   let progressValue = document.getElementById("progress-value");
//   let pos = document.documentElement.scrollTop;
//   let calcHeight =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   let scrollValue = Math.round((pos * 100) / calcHeight);
//   if (pos > 100) {
//     scrollProgress.style.display = "grid";
//   } else {
//     scrollProgress.style.display = "none";
//   }
//   scrollProgress.addEventListener("click", () => {
//     document.documentElement.scrollTop = 0;
//   });
//   scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
// };
// window.onscroll = calcScrollValue;
// window.onload = calcScrollValue;



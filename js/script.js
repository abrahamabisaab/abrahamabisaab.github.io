var mybutton = document.getElementById("myBtn");
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");
 hamburger.addEventListener("click", () => {
    if(navList.className === "nav__list"){
        navList.className += " responsive";
    }
    else{
        navList.className = "nav__list";
    }
    console.log(navList.className);
 });
 
 hamburgerClosed.addEventListener("click", () => {
    if(navList.className === "nav__list responsive"){
        navList.className = "nav__list";
    }
    else{
        navList.className = "nav__list";
    }
    console.log(navList.className);
 });













// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

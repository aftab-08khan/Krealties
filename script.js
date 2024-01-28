const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// mobile menu
var menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "130px"
    } else {
        menuList.style.maxHeight = "0px"
    }
}
// end of mobile menu

// contact mobile slideshow
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";

  if (slideIndex===3){
    document.getElementById("featuretitle").innerHTML="Contact Info:"
  } else if (slideIndex===2){
    document.getElementById("featuretitle").innerHTML="Corporate Office:"
  } else{
    document.getElementById("featuretitle").innerHTML="Registered Office:"
  }
}
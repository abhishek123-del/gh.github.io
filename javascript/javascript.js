
// Nav start 
var respNav = document.getElementById("resp-nav");
var navigation = document.getElementById("navigation");
var croseBtn = document.getElementById("crosebtn");
respNav.addEventListener("click",()=>{
  navigation.style.display = "flex";
})
croseBtn.addEventListener("click",()=>{
    navigation.style.display = "none";
})
// nav end 

// Slider images 
var slides = document.querySelectorAll(".slide");
var sliderSection = document.getElementById("sliderGallery");
var gallery = document.getElementById("gallery");
var galleryRow = document.getElementById("galleryRow");
function blockdiv(pic){
  sliderSection.style.display = "block";
  gallery.src = pic ;
}
var croseBtn = document.getElementById("croseBtn2").addEventListener("click",()=>{
  sliderSection.style.display = "none";
})
var counter = 0;
function goNext(){
 counter++;
 if(counter == slides.length){
   counter = 0;
 }
 gallery.src = slides[counter].src;
}

function goPrev(){
  counter--;
  if(counter == -1){
    counter = 8;
  }
  gallery.src = slides[counter].src;
 }


// slider image section end 








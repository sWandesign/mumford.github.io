/* load start */
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"
});
/* load end */

/* scroll */
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 900);
})


/* aos start */
$(function () {
  AOS.init({
    delay: 300,
    duration: 1000,
    easing: "ease-in-out",
    once: false,
    mirror: true,
    anchorPlacement: 'top-center',
  });
});
/* aos end */

/* card start */
$(document).ready(function () {
  $(".clickdisplay1").click(function (event) {
    $(".delta .accordion").toggle();
  });
  $(".clickdisplay2").click(function (event) {
    $(".johannesburg .accordion").toggle();
  });
  $(".clickdisplay3").click(function (event) {
    $(".wildermind .accordion").toggle();
  });
  $(".clickdisplay4").click(function (event) {
    $(".babel .accordion").toggle();
  });
  $(".clickdisplay5").click(function (event) {
    $(".sighnomore .accordion").toggle();
  });
});
$("#toggle").click(function () {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
});
/* card end */


/* card */
/* let box=document.getElementsByClassName("accordion"),
btn =document.querySelector(".card");

btn.addEventListener("click" ,function(){
  box.classList.toggle("hidden");
},false); */
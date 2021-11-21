const bars = document.getElementById('navbar__open');
const close = document.getElementById('navbar__close');

const navbar = document.getElementById('nav');


const navItem1 = document.getElementById('nav1');
const navItem2 = document.getElementById('nav2');
const navItem3 = document.getElementById('nav3');
const navItem4 = document.getElementById('nav4');
const navItem5 = document.getElementById('nav5');
const navItem7 = document.getElementById('nav7');

const openNav = () => {
    navbar.classList.toggle("active");
    // close.classList.toggle('closeActive');
}

const closeNav = () => {
    navbar.classList.toggle("active");
}

bars.addEventListener("click", openNav);

navItem1.addEventListener("click", closeNav);
navItem2.addEventListener("click", closeNav);
navItem3.addEventListener("click", closeNav);
navItem4.addEventListener("click", closeNav);
navItem5.addEventListener("click", closeNav);
navItem7.addEventListener("click", closeNav);



$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("shadow");
    } else{
        $(".navbar").removeClass("shadow");
    }
});




// COUNTER 

// Set the date we're counting down to
var countDownDate = new Date("Nov 19, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d  " + hours + "h  "
  + minutes + "m  " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
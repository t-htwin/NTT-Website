$(window).on('load', () => {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
})

$(function(){
  $("#servicelist").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    dots: true,
  });
})
// $(".icon").hover(function(this){
//     $(this).css('color', '#91cc3f');
// })


$('.missions li').mouseover(function(){
  $(this).addClass('hover')
});
$('.missions li').mouseout(function(){
  $(this).removeClass('hover')
});




// navigation
$(() =>{
  showHideNav();

  $(window).scroll(function(){
    showHideNav();
  })
  function showHideNav(){
     //alert("You Just Scrolled")
    if ($(window).scrollTop() > 50){

    //show white Navbar
    //alert("Your Scroll position is greater than 50pixels, Your scroll position = " + $(window).scrollTop());
    $("nav").addClass("white-nav-top");

    //Show Back to Top Button
    $('#back-to-top').fadeIn()

  }else{

    //hide white Navbar
    //alert("Your scroll position is less than 50pixels, Your Scroll position = " + $(window).scrollTop())
    $("nav").removeClass("white-nav-top")

    //Hide Back To Top Button
    $('#back-to-top').fadeOut()
  }
  }
})

//Smooth scrolling
$(function(){
  $("a.smooth-scroll").click(function(event){
    event.preventDefault()

    //get section id like #about #services #work #portfolio
    var section_id = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(section_id).offset().top - 64
    }, 1250, "easeInOutExpo");
  })
})

// Map  21.971014,96.086502
var mymap = L.map('mapId').setView([21.971014,96.086502], 18);
var marker = L.marker([21.9711255,96.0864287]).addTo(mymap);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

mymap.scrollWheelZoom.disable();

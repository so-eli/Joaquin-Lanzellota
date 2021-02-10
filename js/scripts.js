// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});

$('#navbarResponsive li a').click(function(e){
  e.preventDefault();
  let ancla = $(this).attr('href');
  console.log(ancla)
  var position = $(ancla).position();
  if (window.matchMedia("(min-width: 568px)").matches) {
    /* La pantalla tiene al menos 568 píxeles de ancho */
    $('html, body').scrollTop( position.top - 76 )
    /* $('html, body').animate({scrollTop: (position.top - 76)}); */
  } else {
    /* La pantalla tiene menos de 568 píxeles de ancho */
    $('html, body').scrollTop( position.top - 230 )
    /* $('html, body').animate({scrollTop: (position.top - 230)}); */
  }
  
})
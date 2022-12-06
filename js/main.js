$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.nav').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

    $('.fa-bars').removeClass('fa-times');
    $('.nav').removeClass('nav-toggle');

    if($(window).scrollTop() > 10){
      $('header').addClass('header-active');
    }else{
      $('header').removeClass('header-active');
    }

  });

  $('.facility').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

});

AOS.init({
    duration:500,
    delay:200
});

/* LOGIN */

function login(){
  var user, pass;

  user = document.getElementById("usuario").value;
  pass = document.getElementById("contraseña").value;

  if (user == "betsy" && pass == "123456"){

      location.href = "admin/dashboard.html"
  }
}
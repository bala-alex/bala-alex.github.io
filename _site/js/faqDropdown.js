$('#questions').hide();
$('#hide').hide();

$(".openLines").click(function(){      
    if ($('#hide').is(":visible")) {
      $('#hide').hide();
      $('#show').show();
    }
    else {
      $('#show').hide();
      $('#hide').show();
    }
    $('#questions').toggle(300);
    //  $("div").toggle(300);
});

// Accordian Action
var action = 'click';
var speed = "500";
$(document).ready(function(){
  $('.plan__box').mouseover(function(e){
    $('.plan__box').removeClass('-active')
    if ($(this).hasClass('-active')) {
      return;
    }
    $(this).addClass('-active');

  });
// Question handler
  $('li.q').on(action, function(){

    // gets next element
    // opens .a of selected question
    $(this).next().slideToggle(speed)

    // selects all other answers and slides up any open answer
    .siblings('li.a').slideUp();

    // Grab img from clicked question
    var img = $(this).children('img');

    // remove Rotate class from all images except the active
    $('img').not(img).removeClass('rotate');

    // toggle rotate class
    img.toggleClass('rotate');

  });
});
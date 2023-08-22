var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 2000) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '2000');
});
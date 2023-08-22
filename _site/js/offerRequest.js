$('#offer').hide();
$('#closeButton').hide();

$(".offer-btns").click(function (e) {
  e.stopPropagation();
  if ($('#closeButton').is(":visible")) {
    $('#closeButton').hide();
    $('#openButton').show();
  }
  else {
    $('#openButton').hide();
    $('#closeButton').show();
  }
  $('#offer').toggle(300);
});
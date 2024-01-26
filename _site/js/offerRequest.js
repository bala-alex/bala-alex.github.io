$('#offer').hide();
$('#closeButton').hide();
$('#offer2').hide();
$('#closeButton2').hide();
$('#offer3').hide();
$('#closeButton3').hide();
$('#offer4').hide();
$('#closeButton4').hide();
$('#offer5').hide();
$('#closeButton5').hide();
$('#offer6').hide();
$('#closeButton6').hide();
$('#offer7').hide();
$('#closeButton7').hide();

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

$(".offer-btns2").click(function (e) {
  e.stopPropagation();
  if ($('#closeButton2').is(":visible")) {
    $('#closeButton2').hide();
    $('#openButton2').show();
  }
  else {
    $('#openButton2').hide();
    $('#closeButton2').show();
  }
  $('#offer2').toggle(300);
});

$(".offer-btns3").click(function (e) {
  e.stopPropagation();
  if ($('#closeButton3').is(":visible")) {
    $('#closeButton3').hide();
    $('#openButton3').show();
  }
  else {
    $('#openButton3').hide();
    $('#closeButton3').show();
  }
  $('#offer3').toggle(300);
});

$(".offer-btns4").click(function (e) {
  e.stopPropagation();
  if ($('#closeButton4').is(":visible")) {
    $('#closeButton4').hide();
    $('#openButton4').show();
  }
  else {
    $('#openButton4').hide();
    $('#closeButton4').show();
  }
  $('#offer4').toggle(300);
});

$(".offer-btns5").click(function (e) {
  e.stopPropagation();
  if ($('#closeButton5').is(":visible")) {
    $('#closeButton5').hide();
    $('#openButton5').show();
  }
  else {
    $('#openButton5').hide();
    $('#closeButton5').show();
  }
  $('#offer5').toggle(300);
});

$(".offer-btns6").click(function (e) {
  e.stopPropagation();
  if ($('#closeButton6').is(":visible")) {
    $('#closeButton6').hide();
    $('#openButton6').show();
  }
  else {
    $('#openButton6').hide();
    $('#closeButton6').show();
  }
  $('#offer6').toggle(300);
});

$(".offer-btns7").click(function (e) {
  e.stopPropagation();
  if ($('#closeButton7').is(":visible")) {
    $('#closeButton7').hide();
    $('#openButton7').show();
  }
  else {
    $('#openButton7').hide();
    $('#closeButton7').show();
  }
  $('#offer7').toggle(300);
});
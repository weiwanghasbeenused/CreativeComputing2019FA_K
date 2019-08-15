var wW = $(window).width(),
	wH = $(window).height(),
	nowW,nowH;
var status_recourceItems = 0;

$('.dropDownFrame').css('width',parseInt($('.dropDownBody').css('width'))+0.01*wW+'px');
$('.dropDownFrame').css('height',$('.dropDownBody').css('height'));
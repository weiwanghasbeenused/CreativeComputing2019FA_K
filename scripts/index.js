var wW = $(window).width(),
	wH = $(window).height(),
	nowW,nowH;
var status_nav = 0;
var tempTitle = ['<h1>Creative</br>Computing</h1>','<h2>Creative Computing</h2>'];

var d = new Date();
var mm = d.getMonth();
var dd = d.getDate();

for(i = 0; i<data_schedule.length;i++){
	var tempM = data_schedule[i].date,
	tempD = data_schedule[i].date;
	tempD = parseInt(tempD.slice(tempD.indexOf('/')+1));
	tempM = parseInt(tempM.slice(0,tempM.indexOf('/')));

	if(i!=0){
		var pTempM = data_schedule[i-1].date,
		pTempD = data_schedule[i-1].date;
		pTempD = parseInt(pTempD.slice(pTempD.indexOf('/')+1));
		pTempM = parseInt(pTempM.slice(0,pTempM.indexOf('/')));
	}else{
		var pTempM = 0,
		pTempD = 0;
	}
	
	if(mm>=pTempM&&mm<=tempM&&dd>=pTempD&&dd<=tempD){
		$('.scheduleCtner').append('<div class = "thisWeek scheduleRow"><div class = "week scheduleItem"><h3>&#9758;</h3></div><div class = "date scheduleItem"><h3>'+data_schedule[i].date+'</h3></div><div class = "doing scheduleItem"><h3>'+data_schedule[i].doing+'</h3></div><div class = "toDo scheduleItem"><h3>'+data_schedule[i].toDo+'</h3></div></div>');
	}else{
		$('.scheduleCtner').append('<div class = "scheduleRow"><div class = "week scheduleItem"><h3>w&thinsp;'+data_schedule[i].week+'</h3></div><div class = "date scheduleItem"><h3>'+data_schedule[i].date+'</h3></div><div class = "doing scheduleItem"><h3>'+data_schedule[i].doing+'</h3></div><div class = "toDo scheduleItem"><h3>'+data_schedule[i].toDo+'</h3></div></div>');

	}
}


$(window).scroll(function(){
	var sTop = $(window).scrollTop();
	if(status_nav == 0){
		if(sTop>=0.05*wH){
			$('.nav').addClass('shrink');
			// $('.courseTitle').stop().fadeOut(250,function(){
			// 	$(this).stop().empty().append(tempTitle[1]).fadeIn('250');
			// });

			status_nav = 1;
		}
	}else if(status_nav == 1){
		if(sTop<0.05*wH){
			$('.nav').removeClass('shrink');
			// $('.courseTitle').stop().fadeOut(250,function(){
			// 	$(this).stop().empty().append(tempTitle[0]).stop().fadeIn('250');
			// });
			status_nav = 0;
		}
	}
});

$('.dropDownFrame').css('width',parseInt($('.dropDownBody').css('width'))+0.025*wW+'px');
$('.dropDownFrame').css('height',$('.dropDownBody').css('height'));
var wW = $(window).width(),
	wH = $(window).height(),
	nowW,nowH;
var status_nav = 0;
var tempTitle = ['<h1>Creative</br>Computing</h1>','<h2>Creative Computing</h2>'];
for(i = 0; i<data_schedule.length;i++){
	$('.scheduleCtner').append('<div class = "scheduleRow"><div class = "week scheduleItem"><h3>'+data_schedule[i].week+'</h3></div><div class = "date scheduleItem"><h3>'+data_schedule[i].date+'</h3></div><div class = "doing scheduleItem"><h3>'+data_schedule[i].doing+'</h3></div><div class = "toDo scheduleItem"><h3>'+data_schedule[i].toDo+'</h3></div></div>');
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
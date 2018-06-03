$(document).ready(function() {
	//Progress bar
	 $(".dws-progress-bar").circularProgress({
        color: "#ffb18b",
        line_width: 17,
        height: "350px",
        width: "350px",
        percent: 0,
        // counter_clockwise: true,
        starting_position: 25
    }).circularProgress('animate', 100, 2000);


    //owl-carousel
	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: true,
		responsive: {
			0:{
				items: 1,
			}
		}
		
	});

	$(".header_img").backstretch([
	  "img/img_1.png",	
	  "img/img_2.png",	
	  "img/img_3.png"	
	], {	
	    fade: 750,	
	    duration: 4000
	});




	







	//responsive bar
	$('.menu').click(function(){
		//$('ul').toggleClass('active');
		$("nav ul").slideToggle("slow");
	})

	//переход
	    //ID блока с ссылками #prime_nav
	$("nav, .contactUs, .header_img, .chef, .bookToday, .welcom").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
 
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
 
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});



	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});


$(window).on('load', function () {
   var $preloader = $('#preloader');
   $preloader.delay(1800).fadeOut('slow');
});

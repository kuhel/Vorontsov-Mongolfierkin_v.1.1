$(document).ready(function() {
	$(".js-carousel").owlCarousel({

		autoPlay: 4000,  
		items : 4,
		navigation : true
   });

	$(".js-example-basic-single").select2();

	$("nav a").click(function(event){
	     event.preventDefault();
	     //calculate destination place
	     var dest=0;
	     if($(this.hash).offset().top > $(document).height()-$(window).height()){
	          dest=$(document).height()-$(window).height();
	     }else{
	          dest=$(this.hash).offset().top;
	     }
	     //go to destination
	     $('html,body').animate({scrollTop:dest}, 1000,'swing');
	 });



  $('#clock').countdown('2015/06/19', function(event) {
		var $this = $(this).html(event.strftime(''
		+ '<span>%d</span> дней '
		+ '<span>%H</span> часов '
		+ '<span>%M</span> минут '
		+ '<span>%S</span> секунд'));
 	});

  	new WOW().init();

});

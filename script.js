$(document).ready(function() {

	if(window.location.href.indexOf("index") > -1) {
		$(".header").height('405');
	}


	$(function(){
		var url = window.location.pathname;  
		var activePage = url.substring(url.lastIndexOf('/')+1);
		$('.header .navbar a').each(function(){  
			var currentPage = this.href.substring(this.href.lastIndexOf('/')+1);

			if (activePage == currentPage) {
				$(this).addClass('active-page'); 
			} 
		});
	})

	$(".navbar li:not(:last-of-type)").append('<div class="vert-div"></div>');


	if(window.location.href.indexOf("index") > -1) {
		$("#large-img").html('<img src="images/gyro.png" alt="gyro">');
	}





});
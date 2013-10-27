

$(document).ready(function() {

	if(window.location.href.indexOf("index") > -1) {
		$(".header").height('405');
		$(".logo").css('margin-top','77px');
		// $(".header .navbar").css("margin-top","23px");
	}


	var url = window.location.pathname;
	document.title = url.substring(url.lastIndexOf('/')+1, url.length-4);


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
		$("#large-img").html('<img src="images/gyro.png" alt="large-gyro">');
	}


	$('#large-img img[alt="large-gyro"]').css('padding-right','0px');
	

	// $('a:contains("Read More")').after('&nbsp;&nbsp;<img src="images/read-more.png">');
	// $('a:contains("View More")').after('&nbsp;&nbsp;<img src="images/read-more.png">');
	$('a:contains("More")').after('&nbsp;&nbsp;<img src="images/read-more.png">');
	$(".number-list p").append('&nbsp;&nbsp;<a href=""><img src="images/read-more.png"></a>');



	
});
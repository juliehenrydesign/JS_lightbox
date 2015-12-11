$(document).ready(function() {
	
	$(".lightbox-link").on("click",function(e){ /*(e overrides in callback a default behavior)*/
		e.preventDefault();
		
		var$image = $("chosen-image")
		
		$(image)("src", $(this).attr("src"));

		$(".outer-lightbox").show();
		$("#chosen").attr("src", "monkey_teeth.jpg");
		$(".outer-lightbox").on("click",function(){
		$(".outer-lightbox").hide();

		});
	
	});


});







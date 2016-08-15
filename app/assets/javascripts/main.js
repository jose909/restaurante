// try{
// 	navigator.serviceWorker.getRegistration().then((r)=>{r.unregister()
// 	});

// }catch(err){

// }
"use strict";

/*if (navigator.serviceWorker) {
	navigator.serviceWorker.register("/sw");
}*/
;(function () {

	var sticky = false;
	$("#sticky-navigacion").removeClass("hidden")
	$("#sticky-navigacion").slideUp(0)

	$(window).scroll(()=>{
		const inBottom = isInBottom()

		if (inBottom && !sticky) {
				sticky = true
				stickNavigation();
			}
		if (!inBottom && sticky) {
				sticky = false
				unStickNavigation()
			}
		})

	

	function stickNavigation() {
		$("#description").addClass("fixed").removeClass("absolute");
		$("#navigation").addClass("hidden")
		$("#sticky-navigacion").removeClass("hidden")
	}
	function unStickNavigation() {
		$("#description").removeClass("fixed").addClass("absolute");
		$("#navigation").removeClass("hidden")
		$("#sticky-navigacion").addClass("hidden")
	}

	function isInBottom() {
		var $description = $("#description");
		var descriptionHeight = $description.height();
		return $(window).scrollTop() > $(window).height() - descriptionHeight * 2;
	}
})()

function tab_anchor(){
	$(".tab a").click(function(e){
		$(this).tab("show");
	})

}

$(document).ready(function(){
	
	tab_anchor();
	// tab_click()
	
})




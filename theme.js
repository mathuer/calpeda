Bliss.Theme = function() {
};

//Create a function for each one of your javascript/jQuery operations to maintain order!
Bliss.Theme.HandleToggleSearch = function(){
	$("a.toggle-search").click(function(e){
		e.preventDefault();
		$("#top-search").slideToggle();
		$("input", $(this)).focus();
	})
}

Bliss.Theme.HandleSearch = function(){
	$('.toggle-search').click( function() {
	    $("#menu-top").removeClass("in");
	} );
}


// Create an instace of your function.
$(function($) {
	Bliss.Theme.HandleToggleSearch();
	Bliss.Theme.HandleSearch();
} );


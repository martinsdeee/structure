(function(){
	// Based on this it's possible styled DOM elements js:enable and js:disable
	$('html').addClass('js');

	// Delete test function
	function test_jquery() {
		var elementCount = $('*').size();
		$('#elements').html(elementCount);
	}
	test_jquery();
	// End delete test function


})();
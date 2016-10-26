(function($) {
	setup();
	
	function setup() {
		var fireInit = new Vivus('fire', {
			type: 'delayed',
			animTimingFunction: Vivus.EASE
		});
		fireInit.stop();
		var birdInit = new Vivus('bird', {
			type: 'oneByOne',
			duration: 200,
			animTimingFunction: Vivus.EASE
		}, function() {
			fireInit.play();
		});
	}
})(jQuery);
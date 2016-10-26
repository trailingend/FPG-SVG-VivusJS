(function($) {
	setup();

	function setup() {
		var tl = new TimelineLite();
		tl.from("#bird",1, {drawSVG:0});
	}
})(jQuery);
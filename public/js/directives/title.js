angular.module('NoteWrangler').directive('title', function($timeout){
	// because we need only link
	return function(scope, element, attrs){
		// use $timeout to wait loading of angular models into the DOM
		$timeout(function(){
			// you can use element.toltip()
			$(element).tooltip();
		});
	};
})
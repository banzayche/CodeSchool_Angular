angular.module('NoteWrangler').factory('Note', function($resource){
	return $resource('/notes/:id', {id: "@id"}, {
		update: {
			method: 'PUT'
		}
	});
});

angular.module('NoteWrangler').factory('Category', function($resource){
	return $resource('/categories');
});
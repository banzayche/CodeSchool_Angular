angular.module('NoteWrangler').config(function($routeProvider){
	$routeProvider
		.when('/', {
			redirectTo: '/notes'
		})
		.when('/notes', {
			templateUrl: '/public/templates/notes-index.html',
			controller: 'NotesIndexController'
		})
		
		.when('/notes/new', {
			templateUrl: '/public/templates/notes-new.html',
			controller: 'NotesCreateController'
		})
		
		.when('/notes/:id', {
			templateUrl: '/public/templates/notes-item.html',
			controller: 'NotesShowController'
		})
		
		.when('/notes/:id/edit', {
			templateUrl: '/public/templates/notes-edit.html',
			controller: 'NotesEditController'
		})

		.otherwise({
        	redirectTo: '/'
      	});
});
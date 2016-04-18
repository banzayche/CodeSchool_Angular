angular.module('NoteWrangler')
	.controller('NotesEditController', function(Note, $scope, $routeParams){
		$scope.note = Note.get({id: $routeParams.id});

		$scope.saveNote = function(note){
			note.update().$promise.finally(function(){
				console.log('FINAL')
			});
		};
	});
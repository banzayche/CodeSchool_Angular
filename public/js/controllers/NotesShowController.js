angular.module('NoteWrangler')
	.controller('NotesShowController', function(Note, $scope, $routeParams, $location){
		$scope.note = Note.get({id: $routeParams.id});
		$scope.isSubmitting = false;

		$scope.deleteNote = function(note){
			console.log('delete', note);
			$scope.isSubmitting = true;
			note.$remove().then(function(){
				$scope.isSubmitting = false;
				$location.path('/notes');
			});
		}
	});
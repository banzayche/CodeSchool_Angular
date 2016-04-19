angular.module('NoteWrangler')
	.controller('NotesEditController', function(Note, $scope, $routeParams, $location, Category){
		$scope.note = Note.get({id: $routeParams.id});
		$scope.isSubmitting = false;
		$scope.categories = Category.query();
		console.log($scope.categories);

		$scope.saveNote = function(note){
			$scope.isSubmitting = true;
			note.$update().finally(function(){
				$scope.isSubmitting = false;

				// redirect
				$location.path('/notes/' + note.id);
			});
		};
	});
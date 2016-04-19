angular.module('NoteWrangler')
	.controller('NotesCreateController', function($scope, Note, $location, Category){
		$scope.note = new Note();
		$scope.isSubmitting = false;
		$scope.categories = Category.query();

		$scope.saveNote = function(note){
			$scope.isSubmitting = true;
			note.$save().then(function(){
				// redirect
				$location.path('/notes');				
			}).catch(function(){
				// validation
			}).finally(function(){
				$scope.isSubmitting = false;
			});
		};
	});
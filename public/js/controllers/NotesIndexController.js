angular.module('NoteWrangler')
	.controller('NotesIndexController', function(Note, $scope){
		$scope.notes = Note.query();
		console.log($scope.notes);
		$scope.search = {};
		window.s = $scope;
	});
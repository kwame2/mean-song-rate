angular.module("myApp.controllers", []).controller("songCtrl", function($scope, songService) {

	    //$scope.songs = [];

	    $scope.songs = songService.get();

    	$scope.newSong = {};

    	$scope.addSong = function(newArtist, newTitle) {
    		$scope.songs.push({artist: newArtist, title: newTitle });
    		$scope.newSong.artist = "";
    		$scope.newSong.title = "";
    	};

    	$scope.deleteSong = function(/** Song */ song) {
    		var idx = $scope.songs.indexOf(song);
    		if (idx >= 0) {
      			$scope.songs.splice(idx, 1);
    		}
  		};

    	$scope.isEmpty = function(str) {
    		return _isBlank(str);
    	};

    	$scope.$watch('songs', function(/** Songs */ newValue, /** Songs */ oldValue) {

    		if (newValue !== oldValue) {
    			songService.put($scope.songs);
    		}

    	}, true);
 		
});
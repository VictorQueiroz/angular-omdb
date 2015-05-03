# angular-omdb

### Installation
```
bower install --save angular-omdb
```

### Usage
```js
angular.module('app', ['victorqueiroz.ngOmdb'])
	.controller('AppCtrl', function ($scope, $omdb) {
		$scope.results = [];

		this.find = function (movieTitle) {
			$omdb.find(movieTitle, 'movie').then(function (results) {
				$scope.results = results;
			});
		};

		this.getMovie = function () {
			return $omdb.get(movieId);
		};
	});
```
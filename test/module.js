describe('omdb', function () {
	var $omdb, $httpBackend;

	beforeEach(module('victorqueiroz.ngOmdb'));

	beforeEach(inject(function ($injector) {
		$omdb = $injector.get('$omdb');
		$httpBackend = $injector.get('$httpBackend');
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should search for movies', function () {
		$httpBackend.expectJSONP('http://www.omdbapi.com?callback=JSON_CALLBACK&r=json&s=Forrest&type=movie&v=1').respond({ Search: [ { Title: 'Hey Arnold!',
       Year: '1996–2004',
       imdbID: 'tt0115200',
       Type: 'series' },
     { Title: 'Hey Ram',
       Year: '2000',
       imdbID: 'tt0222012',
       Type: 'movie' },
     { Title: 'Hey Arnold! The Movie',
       Year: '2002',
       imdbID: 'tt0314166',
       Type: 'movie' },
     { Title: 'Hey Dude',
       Year: '1989–1991',
       imdbID: 'tt0096610',
       Type: 'series' },
     { Title: 'Hey Hey It\'s Esther Blueburger',
       Year: '2008',
       imdbID: 'tt0469099',
       Type: 'movie' },
     { Title: 'Dragon Ball: Hey! Son Goku and Friends Return!!',
       Year: '2008',
       imdbID: 'tt1317478',
       Type: 'movie' },
     { Title: 'Hey Babu Riba',
       Year: '1985',
       imdbID: 'tt0091200',
       Type: 'movie' },
     { Title: 'Hey There, It\'s Yogi Bear',
       Year: '1964',
       imdbID: 'tt0154587',
       Type: 'movie' },
     { Title: 'Hey Good Lookin\'',
       Year: '1982',
       imdbID: 'tt0084070',
       Type: 'movie' },
     { Title: 'Hey Watch This',
       Year: '2010',
       imdbID: 'tt1323598',
       Type: 'movie' }]
    });

		$omdb.find('Forrest', 'movie').then(function (results) {
			expect(results.Search).toBe(undefined);
			expect(results[0].Title).toBe('Hey Arnold!');
		});

		$httpBackend.flush();
	});
});
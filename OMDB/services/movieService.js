angular.module('MovieSearch')
.service('movieService', ['$http','$log',function($http,$log) {
  var self = this
  var movieObj = {}
  this.movieAPI = 'https://g-omdbapi.herokuapp.com'



  this.getMovies = function(movieName) {
    console.log('here');
    var movie = movieName.split(' ').join('+');
    return $http.get(self.movieAPI +'/?t='+ movie +'&y=&plot=short&r=json')
      .then(function(data) {
      $log.info(data)
      if (data.data.Error){
        movieObj = angular.copy(data.data)
        movieObj.found = false
      } else {
        movieObj = angular.copy(data.data)

        movieObj.found = true
        movieObj.votes = 0
        movieObj.date = moment(new Date().getTime()).fromNow()
        movieObj.favorites = false
        movieObj.id = self.movies.length + 1
        self.movies.unshift(movieObj)
        $log.info(self.movies)
      }
    })
  }

  this.movies = [
    {
      "id": 1,
      "favorite": false,
      "date": moment( new Date().getTime() - 285678 ).fromNow(),
      "votes": 5,
      "comments": [],
      "Title": "The Matrix",
      "Year": "1999",
      "Rated": "R",
      "Released": "31 Mar 1999",
      "Runtime": "136 min",
      "Genre": "Action, Sci-Fi",
      "Director": "Lana Wachowski, Lilly Wachowski",
      "Writer": "Lilly Wachowski, Lana Wachowski",
      "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
      "Plot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      "Language": "English",
      "Country": "USA, Australia",
      "Awards": "Won 4 Oscars. Another 33 wins & 44 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_SX300.jpg",
      "Metascore": "73",
      "imdbRating": "8.7",
      "imdbVotes": "1,185,648",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Response": "True"
    },
    {
      "id": 2,
      "favorite": false,
      "date": moment( new Date().getTime() - 485678 ).fromNow(),
      "votes": 4,
      "comments": [],
      "Title": "Finding Nemo",
      "Year": "2003",
      "Rated": "G",
      "Released": "30 May 2003",
      "Runtime": "100 min",
      "Genre": "Animation, Adventure, Comedy",
      "Director": "Andrew Stanton, Lee Unkrich",
      "Writer": "Andrew Stanton (original story by), Andrew Stanton (screenplay), Bob Peterson (screenplay), David Reynolds (screenplay)",
      "Actors": "Albert Brooks, Ellen DeGeneres, Alexander Gould, Willem Dafoe",
      "Plot": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
      "Language": "English",
      "Country": "USA",
      "Awards": "Won 1 Oscar. Another 45 wins & 58 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTY1MTg1NDAxOV5BMl5BanBnXkFtZTcwMjg1MDI5Nw@@._V1_SX300.jpg",
      "Metascore": "90",
      "imdbRating": "8.1",
      "imdbVotes": "661,430",
      "imdbID": "tt0266543",
      "Type": "movie",
      "Response": "True"
    }
  ];
  this.changeVotes = function(movie,changeVal) {
    self.movies.forEach(function(curr){
      $log.info(movie,changeVal)
      if(movie.id == movie.id){
        curr.vote += changeVal
      }
    })
  };


}])

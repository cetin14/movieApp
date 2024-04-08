const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTc4MWM5MzM4NzhiOTMxOWJiZjI4NDQzOTVjODg2ZSIsInN1YiI6IjY2MGQ1NGQxZTAzOWYxMDE3Y2U3OTI1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._DeIUIJEcvoym8GbdWpV9uqRKu6yQBGon-5HAcMYSSc'
  }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(movieList => movieList.json())
  .then(movieList => console.log(movieList.results))
  .catch(err => console.error(err));


fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
  .then(genresList => genresList.json())
  .then(genresList => console.log(genresList.genres))
  .catch(err => console.error(err));


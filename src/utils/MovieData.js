
// Sample movie data structure
const moviesData = [
  {
      title: "Inception",
      genre: "Science Fiction",
      director: "Christopher Nolan",
      releaseYear: 2010,
      rating: 8.8,
      description: "A skilled thief is given a chance at redemption if he can successfully perform inception."
  },
  {
      title: "The Godfather",
      genre: "Crime",
      director: "Francis Ford Coppola",
      releaseYear: 1972,
      rating: 9.2,
      description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son."
  },
  {
      title: "The Shawshank Redemption",
      genre: "Drama",
      director: "Frank Darabont",
      releaseYear: 1994,
      rating: 9.3,
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
      title: "The Dark Knight",
      genre: "Action",
      director: "Christopher Nolan",
      releaseYear: 2008,
      rating: 9.0,
      description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
  },
  {
      title: "Pulp Fiction",
      genre: "Crime",
      director: "Quentin Tarantino",
      releaseYear: 1994,
      rating: 8.9,
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  }
];

// Function to display movie data
function displayMovies(movies) {
  movies.forEach(movie => {
      console.log(`Title: ${movie.title}`);
      console.log(`Genre: ${movie.genre}`);
      console.log(`Director: ${movie.director}`);
      console.log(`Release Year: ${movie.releaseYear}`);
      console.log(`Rating: ${movie.rating}`);
      console.log(`Description: ${movie.description}`);
      console.log('------------------------');
  });
}

// Call the function to display movies
displayMovies(moviesData);

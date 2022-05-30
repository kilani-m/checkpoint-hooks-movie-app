import './App.css';
import { movies } from "./data";
import { useState } from 'react';
import MovieList from './Components/MovieList/MovieList';
import Add from './Components/Add/Add';
import Filter from './Components/Filter/Filter';
function App() {
  const [moviesList, setMoviesList] = useState(movies)
  const [search, setsearch] = useState("")
  const getNewMovie = (newM) => {
    setMoviesList([...moviesList, { ...newM, id: moviesList.length }])
  }
  const handleDclick = () => {
    setMoviesList([])
  }
  const deleteMovie = (idDel) => {
    setMoviesList(moviesList.filter((el) => el.id !== idDel))
  }
  return (
    <div className="App">
      <Filter setsearch={setsearch}/>
      <button onDoubleClick={handleDclick}>Clear all</button>
      {moviesList.length ? <MovieList movies={moviesList.filter((el)=>el.title.toLocaleLowerCase().includes(search.trim().toLowerCase()))} deleteMovie={deleteMovie} /> : <h1>no movies</h1>}
      <Add getNewMovie={getNewMovie} />
    </div>
  );
}

export default App;

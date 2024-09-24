import React, { useContext } from "react";
import {
  MoviesContext,
  MoviesDispatchContext,
} from "../contexts/MoviesContext.js";

export default function MovieList() {
  const { movies, watchList } = useContext(MoviesContext);
  const dispatch = useContext(MoviesDispatchContext);

  const handleAdd = (movie) => {
    if (watchList && watchList.includes(movie)) {
      dispatch({ type: "movieInWatchList", movie });
    } else {
      dispatch({ type: "addToWatchList", movie });
    }
  };
  // Debido a que por defecto ya trae los valores en null, debemos meter esto previo al return para decir que
  // en caso q no haya peliculas nos permite hacer uso del valor length
  if (!movies) {
    return <></>;
  }
  return (
    <div class="">
      {movies.length === 0 ? (
        <p>No hay peliculas en la lista</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <div class= "border-2 border-gray-300 rounded-lg ml-2 mt-4 mb-4">
              <li class="flex justify-between relative items-center" key={movie.id}>
                <img class="size-16 ml-2" src={movie.poster_path}></img>
                <div class= "">
                  <p class="text-xl mb-2 font-semibold">{movie.title}</p>
                  <p class="font-sans ">
                    Año:{movie.release_date.split("-")[0]}
                  </p>
                  <p class="text-sm mb-2">
                    Puntaje:{movie.vote_average.toFixed(1)}/Popularidad:
                    {movie.popularity.toFixed(1)}
                  </p>
                </div>
                <div>
                  <button
                    class="border-2 rounded-lg border-gray-300 mr-2 px-2"
                    onClick={() => handleAdd(movie)}
                  >
                    Agregar a la lista ✔️
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

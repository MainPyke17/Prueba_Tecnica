import React, { useContext } from "react";
import { MoviesContext, MoviesDispatchContext } from "../contexts/MoviesContext";

export default function WatchList() {
  const { watchList } = useContext(MoviesContext);
  const dispatch = useContext(MoviesDispatchContext);

  const handleRemoveMovie = (movie) => {
    dispatch({ type: "removeFromWatchList", movie });
  };
  if (!watchList) {
    return <></>;
  };
  return (
    <div class="ml-8">
      <h2 class="mb-10 mt-1 text-3xl font-bold">Lista de Películas</h2>
      <ul>
        {watchList && watchList.length > 0 ? (
          watchList.map((movie) => (
            <li class="flex justify-between border-2 rounded-lg border-gray-300 mb-4" key={movie.id}>
              <p class= "ml-4">
                {movie.title}     Año:{movie.release_date.split("-")[0]}
              </p>
              <button class="mr-4" onClick={ () => handleRemoveMovie(movie)}>❌</button>
            </li>
          ))
        ) : (
          <li>No hay películas en la lista.</li>
        )}
      </ul>
    </div>
  );
}

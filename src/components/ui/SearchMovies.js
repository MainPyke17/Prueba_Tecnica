import { useContext, useState } from "react";
import { MoviesDispatchContext } from "../contexts/MoviesContext.js";
import { MoviesService } from "../../services/movies";

export default function SearchMovies() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState();
  const dispatch = useContext(MoviesDispatchContext);

  const handleSearch = async () => {
    const data = await MoviesService.SearchMovies(title);

    // filtrar pelicula por año
    if (data.results && data.results.length > 0) {
      const filterMovies = data.results.filter(
        (movie) => parseInt(movie.release_date.split("-")[0]) < parseInt(year)
      );
      const maxMovies = filterMovies.slice(0, 3);

      dispatch({ type: "setMovies", movies: maxMovies });
    } else {
      alert("No se encontraron peliculas");
    }
  };
  return (
    <div class="">
      <h1 class="text-justify text-3xl mb-8 ml-2 font-bold">Buscar</h1>
      <div class="flex justify-between relative mb-8">
        <div>
          <p class="font-sans ml-6 mr-2 font-bold">Título:</p>
          <input
            class="border-2 border-gray-300 rounded-lg ml-4 mr-2 text-justify px-2"
            type="text"
            placeholder="Titulo de la pelicula"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <p class="font-sans font-bold ml-2">Año hasta:</p>
          <input
            class="border-2 border-gray-300 rounded-lg text-justify px-2"
            type="text"
            placeholder="Año"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div class="items-end mr-0.5">
          <button
            class="border-2 border-gray-300 rounded-lg text-justify ml-2 mt-6 px-2"
            onClick={handleSearch}
          >
            Buscar🔍
          </button>
        </div>
      </div>
    </div>
  );
}

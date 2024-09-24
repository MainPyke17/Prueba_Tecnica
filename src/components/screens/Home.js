import MoviesList from "../ui/MoviesList";
import SearchMovies from "../ui/SearchMovies";
import WatchList from "../ui/WatchList";

export default function Home () {
    return (
        <>
        <div>
        <h1 class="font-sans text-justify text-4xl mb-4 mt-2 ml-2 font-bold">Películas Para Mirar</h1>
        </div>
        <div class= {'flex justify-self-center ml-4 mr-4 relative'}>
            <div>
                <SearchMovies />
                <MoviesList />
            </div>
            <div>
                <WatchList />
            </div>
            
        </div>
        </>
    )
}
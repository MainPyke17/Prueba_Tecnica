const { createContext, useReducer } = require("react");

export const MoviesContext = createContext(null);
export const MoviesDispatchContext = createContext(null);

function moviesReducer(state, action) {
  switch (action.type) {
    case "setMovies": {
      return { ...state, movies: action.movies };
    }
    case "addToWatchList": {
      return {
        ...state,
        watchList: [...(state.watchList || []), action.movie],
      };
    }
    case "movieInWatchList": {
      return {
        ...state,
        watchList:(state.watchList  || [])
      }
    }
    case "removeFromWatchList": {
      return {
        ...state,
        watchList: (state.watchList || []).filter(
          (item) => item.id !== action.movie.id
        ),
      };
    }
    case "clear": {
      return { ...state, movies: [] };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialState = { movies: [], watchList: [] };

export default function MoviesContextProvider({ children }) {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  return (
    <MoviesContext.Provider value={state}>
      <MoviesDispatchContext.Provider value={dispatch}>
        {children}
      </MoviesDispatchContext.Provider>
    </MoviesContext.Provider>
  );
}

import "./App.css";
import MoviesContextProvider from "./components/contexts/MoviesContext";
import Home from "./components/screens/Home";

function App() {
  return (
    <>
      <div>
        <MoviesContextProvider>
          <Home />
        </MoviesContextProvider>
      </div>
    </>
  );
}

export default App;

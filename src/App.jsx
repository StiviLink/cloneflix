import './App.css'
import { createBrowserRouter } from "react-router-dom"
import Accueil from "./components/accueil/accueil";
import Series from "./components/serie/serie";
import Films from "./components/film/film";
import Home from "./components/home/home";
import Genre from "./components/genre/genre";
import Favori from "./components/favori/favori";

export  const router = createBrowserRouter([
    {
        path : "/",
        element : <Home />,
        children : [
            {
                index : true,
                element : <Accueil />
            },
            {
                path : "/accueil",
                element : <Accueil />
            },
            {
                path : "/séries",
                element : <Series />
            },
            {
                path : "/films",
                element : <Films />
            },
            {
                path : "/favoris",
                element : <Favori />
            },
            {
                path : "/genre/:idGenre",
                element : <Genre />
            }
        ]
    }
])

function App() {

    return router
}

export default App;

import './App.css'
import { createBrowserRouter } from "react-router-dom"
import Accueil from "./pages/accueil/accueil";
import Series from "./pages/serie/serie";
import Films from "./pages/film/film";
import Home from "./pages/home/home";
import Genre from "./pages/genre/genre";
import Favori from "./pages/favori/favori";
import Info from "./pages/info/info";

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
            },
            {
                path : "/info/:type/:id",
                element : <Info />
            }
        ]
    }
])

function App() {

    return router
}

export default App;

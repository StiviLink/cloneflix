import './App.css'
import { createBrowserRouter } from "react-router-dom"
import Accueil from "./components/accueil/accueil";
import Series from "./components/serie/serie";
import Films from "./components/film/film";
import Home from "./components/home/home";

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
            }
        ]
    }
])

function App() {

    return router
}

export default App;

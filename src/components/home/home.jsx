import { movieData, tvData, genreData } from "../../services";
import { Outlet } from "react-router-dom"
import Header from "../header/header"
import {useDispatch, useSelector} from "react-redux"
import allActions from "../../actions";
const elementsHeader = [
    {
        id : "accueil",
        value : "Accueil",
        url : "/accueil"
    },
    {
        id : "séries",
        value : "Séries",
        url : "/séries"
    },
    {
        id : "films",
        value : "Films",
        url : "/films"
    },
    {
        id : "liste",
        value : "Ma liste",
        url : "/liste"
    }
]

const Home = () => {

    const movies = useSelector(state => state.movieReducer)
    const tvs = useSelector(state => state.tvReducer)
    const genres = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    const chargement = async () => {
        const dataMovie = await movieData.getAll()
        const dataTv = await tvData.getAll()
        const dataGenre = await genreData.getAll()
        if(!movies[0])
            dataMovie.map(x => dispatch(allActions.movieAction.addMovie(x)))
        if(!tvs[0])
            dataTv.map(x => dispatch(allActions.tvAction.addTv(x)))
        if(!genres.movie || !genres.tv)
            dispatch(allActions.genreAction.addGenre(dataGenre))
    }
    console.log(movies)
    console.log(tvs)
    console.log(genres)
    chargement().then()

    return (
        <>
            {movies[0]&&tvs[0]&&genres.movie&&genres.tv ? (
                <>
                    <div id="sidebar">
                        <Header elements={elementsHeader} />
                    </div>
                    <div id="detail">
                        <Outlet/>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export default Home
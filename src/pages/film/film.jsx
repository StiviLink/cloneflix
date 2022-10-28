import Liste from "../../components/liste/liste";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {Constants} from "../../constants/constants";

const Films = () => {
    const constant = new Constants()
    const movies = useSelector(state => state.movieReducer)
    const genres = useSelector(state => state.genreReducer)
    const favoris = useSelector(state => state.favoriReducer)
    const navigate = new useNavigate()
    if(!movies[0])
        navigate('/accueil')

    const listes = constant.listMovies(genres, movies)

    return (
        <>
            {listes.map(liste => (
                <div className="main-content is-full-bleed">
                    <Liste elements={liste.elements} genre={liste.genre} favoris={favoris} type="all"/>
                </div>
            ))}
        </>
    )
}

export default Films
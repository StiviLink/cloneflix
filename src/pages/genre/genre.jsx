import Liste from "../../components/liste/liste";
import { useSelector } from "react-redux"
import {useParams} from "react-router-dom";
import {Constants} from "../../constants/constants";

const Genre = () => {
    const {idGenre} = useParams()
    const constants = new Constants()
    const movies = useSelector(state => state.movieReducer)
    const tvs = useSelector(state => state.tvReducer)
    const genres = useSelector(state => state.genreReducer)
    const favoris = useSelector(state => state.favoriReducer)
    const liste = constants.allLists(movies, tvs, genres).find(x => x.genre.id===parseInt(idGenre))
    const listes = liste?liste : (constants.listTvs(genres,tvs).find(x=>x.genre.id===parseInt(idGenre)) ?
        constants.listTvs(genres,tvs).find(x=>x.genre.id===parseInt(idGenre)) :
        constants.listMovies(genres,movies).find(x=>x.genre.id===parseInt(idGenre)))
    console.log(listes)

    return (
        <>
            <div className="main-content is-full-bleed">
                <Liste elements={listes.elements} genre={listes.genre} favoris={favoris} type="genre"/>
            </div>
        </>
    )
}

export default Genre
import Liste from "../liste/liste";
import { useSelector } from "react-redux"
import {Constants} from "../../constants/constants";

const Accueil = () => {
    const constants = new Constants()
    const movies = useSelector(state => state.movieReducer)
    const tvs = useSelector(state => state.tvReducer)
    const genres = useSelector(state => state.genreReducer)
    const listes = constants.allLists(movies, tvs, genres)

    console.log(listes)

    return (
        <>
            {listes.map(liste => (
                <div className="main-content is-full-bleed">
                    <Liste elements={liste.elements} genre={liste.genre} type="all"/>
                </div>
            ))}
        </>
    )
}

export default Accueil
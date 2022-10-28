import Liste from "../../components/liste/liste";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {Constants} from "../../constants/constants";

const Series = () => {
    const constant = new Constants()
    const tvs = useSelector(state => state.tvReducer)
    const genres = useSelector(state => state.genreReducer)
    const navigate = new useNavigate()
    if(!tvs[0])
        navigate('/accueil')
    const listes = constant.listTvs(genres, tvs)

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

export default Series
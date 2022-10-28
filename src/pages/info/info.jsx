import Liste from "../../components/liste/liste";
import { useSelector } from "react-redux"
import {useParams} from "react-router-dom";

const Info = () => {
    const {id, type} = useParams()
    const list = type==="movie" ? useSelector(state => state.movieReducer)
        : useSelector(state => state.tvReducer)
    const element = list.find(x => x.id===parseInt(id))
    element.image = `https://image.tmdb.org/t/p/w500/${element['backdrop_path']}`
    console.log(element)

    return (
        <>
            <div className="main-content is-full-bleed">
                <Liste element={element} type="info"/>
            </div>
        </>
    )
}

export default Info
import Liste from "../../components/liste/liste";
import { useSelector } from "react-redux"

const Favori = () => {
    const favoris = useSelector(state => state.favoriReducer)

    return (
        <>
            <div className="main-content is-full-bleed">
                <Liste elements={favoris} favoris={favoris} type="favoris"/>
            </div>
        </>
    )
}

export default Favori
import Liste from "../liste/liste";
import { useSelector } from "react-redux"

const Favori = () => {
    const favoris = useSelector(state => state.favoriReducer)

    console.log(favoris)

    return (
        <>
            <div className="main-content is-full-bleed">
                <Liste elements={favoris} type="favoris"/>
            </div>
        </>
    )
}

export default Favori
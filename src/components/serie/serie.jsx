import Liste from "../liste/liste";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Series = () => {
    const tvs = useSelector(state => state.tvReducer)
    const genres = useSelector(state => state.genreReducer)
    const navigate = new useNavigate()
    if(!tvs[0])
        navigate('/accueil')

    const allGenres = genres.tv
    const listes = []
    console.log(allGenres)
    allGenres.map(genre => {
        const allTvs = []
        const tv = tvs.filter(x => x['genre_ids'].find(y => y===genre.id))
        tv.map(x => allTvs.push({
            title : x.title,
            description : x['overview'],
            image : `https://image.tmdb.org/t/p/w500/${x['poster_path']}`,
            url : `/série/${x.id}`,
            id : x.id
        }))
        listes.push({
            elements : allTvs.sort((a,b) => b.id - a.id),
            genre : {...genre, url : `/series/${genre.name}`, title : genre.name}
        })
    })

    console.log(listes)

    return (
        <>
            {listes.map(liste => (
                <div className="main-content is-full-bleed">
                    <Liste elements={liste.elements} genre={liste.genre}/>
                </div>
            ))}
        </>
    )
}

export default Series
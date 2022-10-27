import Liste from "../liste/liste";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Films = () => {
    const movies = useSelector(state => state.movieReducer)
    const genres = useSelector(state => state.genreReducer)
    const navigate = new useNavigate()
    if(!movies[0])
        navigate('/accueil')

    const allGenres = genres.movie
    const listes = []
    console.log(allGenres)
    allGenres.map(genre => {
        const allMovies = []
        const movie = movies.filter(x => x['genre_ids'].find(y => y===genre.id))
        movie.map(x => allMovies.push({
            title : x.title,
            description : x['overview'],
            image : `https://image.tmdb.org/t/p/w500/${x['poster_path']}`,
            url : `/movie/${x.id}`,
            id : x.id
        }))
        listes.push({
            elements : allMovies.sort((a,b) => b.id - a.id),
            genre : {...genre, url : `/films/${genre.name}`, title : genre.name}
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

export default Films
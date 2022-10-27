import Liste from "../liste/liste";
import { useSelector } from "react-redux"

const Accueil = () => {
    const movies = useSelector(state => state.movieReducer)
    const tvs = useSelector(state => state.tvReducer)
    const genres = useSelector(state => state.genreReducer)

    const allGenres = []
    genres.movie.map(x => {
        if(genres.tv.find(y => y.id===x.id))
            allGenres.push(x)
    })
    const listes = []
    console.log(allGenres)
    allGenres.map(genre => {
        const allMovies = []
        const allTvs = []
        const movie = movies.filter(x => x['genre_ids'].find(y => y===genre.id))
        movie.map(x => allMovies.push({
            title : x.title,
            description : x['overview'],
            image : `https://image.tmdb.org/t/p/w500/${x['poster_path']}`,
            url : `/movie/${x.id}`,
            id : x.id
        }))
        const tv = tvs.filter(x => x['genre_ids'].find(y => y===genre.id))
        tv.map(x => allTvs.push({
            title : x.title,
            description : x['overview'],
            image : `https://image.tmdb.org/t/p/w500/${x['poster_path']}`,
            url : `/tv/${x.id}`,
            id : x.id
        }))
        listes.push({
            elements : [...allMovies, ...allTvs].sort((a,b) => b.id - a.id),
            genre : {...genre, url : `/${genre.name}`, title : genre.name}
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

export default Accueil
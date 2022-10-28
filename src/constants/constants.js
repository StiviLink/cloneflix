export class Constants {
    listMovies = function(genres, movies){
        const listes = []
        genres.movie.map(genre => {
            const allMovies = []
            const movie = movies.filter(x => x['genre_ids'].find(y => y===genre.id))
            movie.map(x => allMovies.push({
                title : x.title,
                description : x['overview'],
                image : `https://image.tmdb.org/t/p/w500/${x['poster_path']}`,
                parution : x['release_date'],
                backdrop : `https://image.tmdb.org/t/p/w500/${x['backdrop_path']}`,
                url : `/info/movie/${x.id}`,
                id : x.id
            }))
            listes.push({
                elements : allMovies.sort((a,b) => b.id - a.id),
                genre : {...genre, url : `/genre/${genre.id}`, title : genre.name}
            })
        })
        return listes
    }
    listTvs = function(genres, tvs){
        const listes = []
        genres.tv.map(genre => {
            const allTvs = []
            const tv = tvs.filter(x => x['genre_ids'].find(y => y===genre.id))
            tv.map(x => allTvs.push({
                title : x.name,
                description : x['overview'],
                image : `https://image.tmdb.org/t/p/w500/${x['poster_path']}`,
                parution : x['release_date'],
                backdrop : `https://image.tmdb.org/t/p/w500/${x['backdrop_path']}`,
                url : `/info/série/${x.id}`,
                id : x.id
            }))
            listes.push({
                elements : allTvs.sort((a,b) => b.id - a.id),
                genre : {...genre, url : `/genre/${genre.id}`, title : genre.name}
            })
        })
        return listes
    }
    allLists = (movies, tvs, genres) => {
        const listMovies = this.listMovies(genres, movies)
        const listTvs = this.listTvs(genres, tvs)
        const allGenres = []
        genres.movie.map(x => {
            if(genres.tv.find(y => y.id===x.id))
                allGenres.push(x)
        })
        const listes = []
        allGenres.map(genre => {
            const movies = listMovies.find(x => x.genre.id===genre.id).elements
            const tvs = listTvs.find(x => x.genre.id===genre.id).elements
            listes.push({
                elements : [...movies, ...tvs].sort((a,b) => b.id - a.id),
                genre : {...genre, url : `/genre/${genre.id}`, title : genre.name}
            })
        })
        return listes
    }
}
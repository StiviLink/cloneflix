import {api_key, options, url} from "../fetch-common";

const params = `api_key=${api_key}&language=fr-FR`
export class genreDataService {
    getAll = async function (){
        const movieUrl = `${url}/genre/movie/list`, lienMovie = `${movieUrl}?${params}`, tvUrl = `${url}/genre/tv/list`,
            lienTv = `${tvUrl}?${params}`, responseMovie = await fetch(lienMovie, options),
            responseTv = await fetch(lienTv, options), responseMovieJson = await responseMovie.json(),
            responseTvJson = await responseTv.json()
        return { movie : responseMovieJson['genres'], tv : responseTvJson['genres'] }
    }
}
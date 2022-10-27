import {moviesDataService} from "./movie.service"
import {tvDataService} from "./tv.service"
import {genreDataService} from "./genre.service"

export const movieData = new moviesDataService()
export const tvData = new tvDataService()
export const genreData = new genreDataService()

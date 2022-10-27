import {combineReducers} from "redux"
import movieReducer from "./movie.reducer"
import tvReducer from "./tv.reducer"
import genreReducer from "./genre.reducer"
import favoriReducer from "./favori.reducer";

const rootReducer = combineReducers({
    movieReducer,
    tvReducer,
    genreReducer,
    favoriReducer
})

export default rootReducer
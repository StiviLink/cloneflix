import {combineReducers} from "redux"
import movieReducer from "./movie.reducer"
import tvReducer from "./tv.reducer"
import genreReducer from "./genre.reducer"

const rootReducer = combineReducers({
    movieReducer,
    tvReducer,
    genreReducer
})

export default rootReducer
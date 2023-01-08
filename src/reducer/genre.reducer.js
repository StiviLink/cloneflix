const genreReducer = (state = {}, action) => {
    switch (action.type){
        case "ADD_GENRE" :
            return {...state, ...action.payload}
        default :
            return state
    }
}

export default genreReducer
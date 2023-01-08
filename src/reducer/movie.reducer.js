const movieReducer = (state = [], action) => {
    switch (action.type){
        case "ADD_MOVIE" :
            return state.find(x => x.id===action.payload.id) ? state : [...state, action.payload]
        default :
            return state
    }
}

export default movieReducer
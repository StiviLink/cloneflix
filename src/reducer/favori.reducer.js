const favoriReducer = (state = [], action) => {
    switch (action.type){
        case "ADD_FAVORI" :
            return state.find(x => x.id===action.payload.id) ? state : [...state, action.payload]
        case "DEL_FAVORI" :
            return state.filter(x => x.id!==action.payload.id)
        default :
            return state
    }
}

export default favoriReducer
const tvReducer = (state = [], action) => {
    switch (action.type){
        case "ADD_TV" :
            return state.find(x => x.id===action.payload.id) ? state : [...state, action.payload]
        default :
            return state
    }
}

export default tvReducer
const addMovie = (data) => {
    return {
        type : "ADD_MOVIE",
        payload : data
    }
}

export default { addMovie }
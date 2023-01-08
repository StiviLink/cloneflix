const addGenre = (data) => {
    return {
        type : "ADD_GENRE",
        payload : data
    }
}

export default { addGenre }
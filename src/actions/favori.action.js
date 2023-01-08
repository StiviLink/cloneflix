const addFavori = (data) => {
    return {
        type : "ADD_FAVORI",
        payload : data
    }
}

const delFavori = (data) => {
    return {
        type : "DEL_FAVORI",
        payload : data
    }
}

export default { addFavori, delFavori }
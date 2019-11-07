import axios from "../config/axios"

export const setAuthors = (authors) => {
    return {
        type:'SET_AUTHORS',
        payload: authors
    }
}

export const startSetAuthors = () => {
        return(dispatch) => {
            axios.get('/users')
                .then(response=>{
                    const authors = response.data
                    dispatch(setAuthors(authors))
                })
        }
}
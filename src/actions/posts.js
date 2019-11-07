import axios from "../config/axios"

export const setPosts = (posts) => {
    return {
        type:'SET_POSTS',
        payload: posts
    }
}

export const startSetPosts = () => {
        return(dispatch) => {
            axios.get('/posts')
                .then(response=>{
                    const posts = response.data
                    dispatch(setPosts(posts))
                })
        }
}
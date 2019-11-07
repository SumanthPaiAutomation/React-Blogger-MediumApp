const postsReducer  = (state=[],action) => {
        switch(action.type){
            case 'SET_POSTS':
                return [].concat(state,action.payload)
            default:
                return [...state]
        }
} 
export default postsReducer
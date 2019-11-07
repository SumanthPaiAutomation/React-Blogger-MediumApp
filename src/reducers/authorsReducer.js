const authorsReducer = (state=[],action) => {
    switch(action.type){
        case 'SET_AUTHORS':
            return [].concat(state,action.payload)
        default:
            return [...state]
    }
}

export default authorsReducer
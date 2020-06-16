const INITIAL_STATE = {memes: []};

const rootReducer = (state=INITIAL_STATE, action) => {
    if (action.type === 'MEME') {
        return {...state, memes: [...state.memes, action.payload]}
    }
    return state
}

export default rootReducer;
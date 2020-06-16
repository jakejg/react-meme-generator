const INITIAL_STATE = {memes: []};

const rootReducer = (state=INITIAL_STATE, action) => {
    if (action.type === 'MEME') {
        return {...state, memes: [...state.memes, action.payload]}
    }

    if (action.type === 'REMOVE') {
        return {...state, memes: state.memes.filter(meme => meme.props.id !== action.payload )}
    }
    return state
}

export default rootReducer;
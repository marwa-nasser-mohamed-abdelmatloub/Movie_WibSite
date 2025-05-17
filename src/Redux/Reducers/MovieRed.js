const initialState = {
    loading: false,
    list: [],
    error: null,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_MOVIES_SUCCESS':
            return { ...state, loading: false, list: action.payload };
        case 'FETCH_MOVIES_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default movieReducer;
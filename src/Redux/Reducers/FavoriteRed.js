const initialState = {
    favoriteList: []
};

function FavoriteRed(state = initialState, action) {
    switch (action.type) {
        case 'FAVORITE':
            if (!action.payload || !action.payload.id) return state;
            const exists = state.favoriteList.find(item => item.id === action.payload.id);
            return {
                ...state,
                favoriteList: exists
                    ? state.favoriteList.filter(item => item.id !== action.payload.id)
                    : [...state.favoriteList, action.payload]
            };
        default:
            return state;
    }
}

export default FavoriteRed;
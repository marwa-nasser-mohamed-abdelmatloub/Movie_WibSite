// import { createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import FavoriteRed from './Reducers/FavoriteRed';

// const store = createStore(FavoriteRed, composeWithDevTools());

// export default store;


import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import MovieRed from './Reducers/MovieRed';

const rootReducer = combineReducers({
    movies: MovieRed
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;

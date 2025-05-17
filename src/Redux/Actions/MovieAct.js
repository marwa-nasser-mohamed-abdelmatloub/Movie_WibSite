import axios from 'axios';

export const fetchMovies = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_MOVIES_REQUEST' });

        try {
            const response = await axios.get(
                'https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad'
            );
            dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: response.data.results });
        } catch (error) {
            dispatch({
                type: 'FETCH_MOVIES_FAILURE',
                payload: error.message || "Failed to load movies. Please try again later.",
            });
        }
    };
};
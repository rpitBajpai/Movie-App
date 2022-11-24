import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: []
}

export default function movies (state= initialMoviesState, action){
    // In React Community, we avaoid using If-Else. Instead, we use Switch Case.
    // if(action.type === ADD_MOVIES){
    //     // return action.movies;
    //     return {
    //         // spread operator
    //     ...state,
    //     list: action.movies
    //     }
        
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITES:
            return{
                ...state,
                favourites: [action.movie,  ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        default:
            return state;
    }
}


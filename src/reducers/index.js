import { ADD_MOVIES, ADD_FAVOURITE } from "../actions";

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
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites: [action.movie,  ...state.favourites]
            }
        default:
            return state;
    }
}


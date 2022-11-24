import { ADD_MOVIES } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: []
}

export default function movies (state= initialMoviesState, action){
    if(action.type === ADD_MOVIES){
        // return action.movies;
        return {
            // spread operator
        ...state,
        list: action.movies
        }
        
    }
    return state;
}


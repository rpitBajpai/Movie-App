import React from "react";
import { data as moviesList } from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";
import { StoreContext } from "../index";


class App extends React.Component {

  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });
    // make API call
    // Dispatch Action

    store.dispatch(addMovies(moviesList));

    // console.log('STATE', this.props.store.getState());
  }

  isMovieFavourite = (movie) => {

    // const{ favourites } = this.props.store.getState();
    const { movies } = this.props.store.getState();


    // const index = favourites.indexOf(movie);
    const index = movies.favourites.indexOf(movie);

    if (index != -1) {
      // found the movie
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val))
  }

  render() {
    const { movies, search } = this.props.store.getState(); // {movies:{}, search: {}}
    const { list, favourites, showFavourites } = movies;
    console.log('RENDER', this.props.store.getState());

    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>

          <div className="list">
            {/* {movies.map((movie, index) => ( */}
            {/* {list.map((movie, index) => ( */}
            {displayMovies.map((movie, index) => (

              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No movies to display!</div> : null}
        </div>
      </div>
    );
  }

}

class AppWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => <App store={store} />}
      </StoreContext.Consumer>
    )
  }
}

export default AppWrapper;

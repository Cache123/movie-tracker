import React from 'react';
import { connect } from 'react-redux';
import { toggleFavorite, AddFavorite, removeFavorite } from '../../actions';



const MovieCard = (props) => {
  const title = props.movie.title;
  const poster = props.movie.poster_path;

  
  const handleFavorite = (movie) => {
    
    if (movie.isFavorite === false) {
      props.AddFavorite(movie, props.user.id)
    } else {
      props.removeFavorite(props.user.id, movie.movie_id)
    }
    props.toggleFavorite(movie)
  }

  const checkFavorite = (movie) => {
    if (!props.user.name) {
      alert('You must log-in to add a favorite')
    } else {
      handleFavorite(movie)
    }
  }

  return (

    <div className='movie-card'>
      <button className='favoriteButtons'
          onClick={(e)=>{
            e.preventDefault()
            checkFavorite(props.movie)
          }}
           >Add Favorite</button>

      <img className='movie-poster'
           src={`https://image.tmdb.org/t/p/w500${poster}`}

            />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    favorites: state.favorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (movie) => dispatch(toggleFavorite(movie)),
    AddFavorite: (movie, id) => dispatch(AddFavorite(movie, id)),
    removeFavorite: (userId, movieId) => dispatch(removeFavorite(userId, movieId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

import React, {useEffect, useState} from 'react';
import MainForm from '../../components/main/MainForm';
import HeaderContainer from '../common/HeaderContainer';
import {useSelector, useDispatch} from 'react-redux';
import {movieData, movieInitialize} from '../../modules/movie';

const MOVIE_DATA_LIMITE = 4;

const MainContainer = () => {
  const dispatch = useDispatch();
  const [movieError, setMovieError] = useState();
  const {userData, movieAllData, movieAllError, isLoading} = useSelector(
    ({user, loading, movie}) => ({
      userData: user.user,
      movieAllData: movie.movieAllData,
      movieAllError: movie.movieAllError,
      isLoading: loading['movie/MOVIE_DATA'],
    }),
  );

  useEffect(() => {
    dispatch(movieData(1));
    return () => {
      dispatch(movieInitialize());
    };
  }, [dispatch]);

  useEffect(() => {
    if (movieAllError) {
      console.log(movieAllError);
    }
  }, [movieAllError]);

  return (
    <>
      <HeaderContainer user={userData} />
      <MainForm
        user={userData}
        loading={isLoading}
        movieAllData={movieAllData}
      />
    </>
  );
};

export default MainContainer;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovieForm from '../../components/movie/MovieForm';

const Movie = createStackNavigator();

const MovieContainer = () => {
  return (
    <Movie.Navigator>
      <Movie.Screen name="Movie" component={MovieForm} />
    </Movie.Navigator>
  );
};

export default MovieContainer;

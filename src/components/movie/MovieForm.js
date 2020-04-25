import React from 'react';
import styled from 'styled-components';

const MovieFormBox = styled.View``;
const MovieFormWapper = styled.View``;
const MovieFormLogo = styled.Text`
  font-size: 24px;
`;
const MovieForm = () => {
  return (
    <MovieFormBox>
      <MovieFormWapper>
        <MovieFormLogo>Myhome이다</MovieFormLogo>
      </MovieFormWapper>
    </MovieFormBox>
  );
};

export default MovieForm;

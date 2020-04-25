import React from 'react';
import styled from 'styled-components';

const MyHomeFormBox = styled.View``;
const MyHomeFormWapper = styled.View``;
const MyHomeFormLogo = styled.Text`
  font-size: 24px;
`;
const MyHomeForm = () => {
  return (
    <MyHomeFormBox>
      <MyHomeFormWapper>
        <MyHomeFormLogo>Myhome이다</MyHomeFormLogo>
      </MyHomeFormWapper>
    </MyHomeFormBox>
  );
};

export default MyHomeForm;

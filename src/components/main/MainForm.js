import React from 'react';
import styled from 'styled-components';

const MainFormBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainFormWapper = styled.View``;
const MainFormLogo = styled.Text`
  font-size: 24px;
`;
const MainForm = () => {
  return (
    <MainFormBox>
      <MainFormWapper>
        <MainFormLogo>겨우됐다앙</MainFormLogo>
      </MainFormWapper>
    </MainFormBox>
  );
};

export default MainForm;

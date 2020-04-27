import React from 'react';
import styled from 'styled-components';

const MainFormBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  width: 100%;
  height: 90%;
`;
const BoxOfficeWrapper = styled.View`
  flex: 1;
`;
const BoxOfficeTitle = styled.View`
  flex: 1;
`;
const BoxOfficeImage = styled.View`
  flex: 6;
`;

const Title = styled.Text`
  color: white;
  font-size: 30px;
  margin-top: 20;
  text-decoration-line: underline;
`;

const Image = styled.Text`
  color: white;
  font-size: 24px;
`;

const SV = styled.ScrollView`
  font-size: 24px;
`;
const MainForm = () => {
  return (
    <MainFormBox>
      <BoxOfficeWrapper>
        <BoxOfficeTitle>
          <Title>BoxOffice</Title>
        </BoxOfficeTitle>

        <BoxOfficeImage>
          <Image>겨우됐다앙</Image>
        </BoxOfficeImage>
      </BoxOfficeWrapper>
    </MainFormBox>
  );
};

export default MainForm;

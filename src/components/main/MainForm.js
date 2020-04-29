import React from 'react';
import styled from 'styled-components';
import {SliderBox} from 'react-native-image-slider-box';
import {Text, View} from 'react-native';
import WelcomeImage1 from '../../lib/styles/img/welcome.jpg';

import WelcomeImage2 from '../../lib/styles/img/welcome.jpg';

import WelcomeImage3 from '../../lib/styles/img/welcome.jpg';

const ddd = [WelcomeImage1, WelcomeImage2, WelcomeImage3];

const MainFormBox = styled.ScrollView`
  display: flex;
  background-color: #333;
  width: 100%;
  height: 90%;
`;
const BoxOfficeWrapper = styled.View`
  flex: 1;
`;
const BoxOfficeTitle = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
const BoxOfficeImage = styled.View`
  flex: 3;
  align-items: center;
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

const ImageSlider = styled.View`
  flex: 1;
  width: 300;
`;
const MainForm = ({movieAllData, loading}) => {
  let imageList = [];
  if (movieAllData && !loading) {
    movieAllData.results.slice(0, 3).map((data, index) => {
      imageList.push(`https://image.tmdb.org/t/p/w300${data.poster_path}`);
      return;
    });
  }
  return (
    <MainFormBox>
      <BoxOfficeWrapper>
        <BoxOfficeTitle>
          <Title>BoxOffice</Title>
        </BoxOfficeTitle>
        <BoxOfficeImage>
          <ImageSlider>
            {movieAllData && !loading && (
              <SliderBox
                images={imageList}
                sliderBoxHeight={500}
                parentWidth={300}
                circleLoop={true} //맨끝 슬라이드에서 다시 첫슬라이드로
                dotColor="rgba(0,0,0,0)" // 아래 점 투명으로 안보이게 가림
                inactiveDotColor="rgba(0,0,0,0)"
                currentImageEmitter={(index) => {
                  // 이미지가 바뀔때 어떤 동작을 할지 설정
                }}
              />
            )}
          </ImageSlider>
        </BoxOfficeImage>
      </BoxOfficeWrapper>
    </MainFormBox>
  );
};

export default MainForm;

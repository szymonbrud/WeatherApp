import styled from 'styled-components';

export const MainWrapper = styled.article`
  position: relative;
  left: -20px;
`;

export const CityName = styled.h3`
  font-size: 48px;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  margin: 0;
`;

export const WeatherStatus = styled.p`
  font-size: 18px;
  margin: 0 0 43px;
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const DetailsTitle = styled.p`
  margin: 8px 0 0 0;
  font-size: 14px;
  width: max-content;
`;

export const DetailsContent = styled.p`
  font-weight: 700;
  margin: 8px 0 0 0;
`;

export const Image = styled.img`
  position: absolute;
  left: 90%;
  top: 5%;
  transform-origin: center;
  transform: scale(1.1);
`;

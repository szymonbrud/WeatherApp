import styled, { css } from 'styled-components';

import { statusOfWeatherView } from 'Context/WeatherContext';

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 36px;
`;

const defaultStyleOfTextSearch = css`
  ::after {
    width: 100%;
    text-align: center;
    content: 'The city was not found';
    position: absolute;
    top: calc(100% + 25px);
    left: 50%;
    transform: translateX(-50%);
    color: #979797;
    font-size: 14px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
`;

export const SearchInputWrapper = styled.div`
  position: relative;

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.darkBlue};
    transform-origin: center;
    transition: transform 0.2s;
  }

  ${({ status }: { status?: statusOfWeatherView }) => {
    if (status === statusOfWeatherView.notFoundCity) {
      return css`
        ${defaultStyleOfTextSearch};
      `;
    } else if (status === statusOfWeatherView.error) {
      return css`
        ${defaultStyleOfTextSearch};
        content: 'Unexpected error! Reset application.';
        color: red;
      `;
    } else if (status === statusOfWeatherView.passed) {
      return css`
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);

        ::before {
          transform: scaleX(0.2);
        }
      `;
    }
  }}
`;

export const SearchInput = styled.input`
  width: 210px;
  border: none;
  background: none;
  margin-top: 30px;
  font-size: 24px;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: center;
  padding: 10px 0;
  font-stretch: condensed;

  ::placeholder {
    color: #c0c0c0;
  }

  :focus {
    outline: 0;
    background: #f4efd8;
  }
`;

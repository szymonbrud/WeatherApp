import styled, { css } from 'styled-components';

export enum tempStatuses {
  hot,
  cool,
  cold,
}

export const MainWrapper = styled.p`
  font-size: 48px;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  position: absolute;
  top: -105px;
  right: -35%;
  font-weight: 900;

  ${({ tempStatus }: { tempStatus: tempStatuses }) => {
    switch (tempStatus) {
      case tempStatuses.hot:
        return css`
          color: #ea3710;
        `;
      case tempStatuses.cool:
        return css`
          color: #e3ac58;
        `;
      default:
        return css`
          color: #455eb9;
        `;
    }
  }}
`;

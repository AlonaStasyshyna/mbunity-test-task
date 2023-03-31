import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 24px;

  @media screen and (max-width: 1235px) {
    justify-content: center;
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #1b1b1b;

  svg {
    fill: currentColor;
  }

  &:hover,
  &:focus {
    background-color: #ffffff;

    svg {
      fill: #000000;
    }
  }
`;

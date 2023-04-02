import styled from 'styled-components';

export const Button = styled.button`
  @media screen and (max-width: 1235px) {
    position: relative;
    z-index: 2;
    border: none;
    background-color: transparent;

    svg {
      fill: ${p => (p.visibility === 'true' ? '#FFFFFF' : '#000000')};
    }
  }
`;

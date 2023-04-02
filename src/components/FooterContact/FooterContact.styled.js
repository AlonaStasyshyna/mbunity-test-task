import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 143px;

  ul {
    align-items: flex-start;
    margin-bottom: 0;
  }

  li {
    align-items: flex-start;
  }

  @media screen and (min-width: 1236px) {
    width: 331px;
    margin-right: 48px;

    ul {
      gap: 24px;
    }
  }
`;

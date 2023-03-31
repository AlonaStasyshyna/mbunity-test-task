import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 58px;

  @media screen and (min-width: 1236px) {
    gap: 50px;
    margin-bottom: 159px;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 25px;

  @media screen and (max-width: 1235px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

export const Link = styled.a`
  font-size: 12px;

  @media screen and (min-width: 1236px) {
    font-size: 16px;
  }
`;

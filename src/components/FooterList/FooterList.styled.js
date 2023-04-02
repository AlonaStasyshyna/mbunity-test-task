import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1236px) {
    margin-right: 60px;
  }
`;

export const LastWrapper = styled(Wrapper)`
  @media screen and (min-width: 1236px) {
    margin-right: 96px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 12px;

  @media screen and (min-width: 1236px) {
    gap: 24px;
    font-size: 16px;
  }
`;

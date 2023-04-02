import styled from 'styled-components';
import { Container } from 'utils/GlobalStyle.styled';

export const CustomizedHeader = styled.header`
  padding-top: 28px;
  padding-bottom: 29px;
  color: #1f1f1f;

  @media screen and (min-width: 1236px) {
    max-width: 1240px;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 73px;
  }
`;

export const CustomizedContainer = styled(Container)`
  @media screen and (max-width: 1235px) {
    display: flex;
    justify-content: space-between;
  }
`;

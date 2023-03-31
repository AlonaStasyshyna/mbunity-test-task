import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px 5px 0;
  background-color: #ffffff;
  box-shadow: 0px 0px 60px 30px rgba(0, 0, 0, 0.03);
  border-radius: 5px;

  @media screen and (min-width: 1236px) {
    display: flex;
    padding: 10px;
    max-width: 1196px;
    margin-left: auto;
    margin-right: auto;
  }
`;

import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 20px;

  @media screen and (min-width: 1190px) {
    margin-bottom: 50px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;

  text-align: center;
  font-size: 24px;
  color: #000000;

  @media screen and (min-width: 1190px) {
    font-size: 40px;
  }
`;

export const Text = styled.p`
  max-width: 184px;
  margin-left: auto;
  margin-right: auto;

  text-align: center;
  font-weight: 500;
  font-size: 14px;
  color: #717171;

  @media screen and (min-width: 1190px) {
    max-width: 100%;
    font-size: 18px;
  }
`;

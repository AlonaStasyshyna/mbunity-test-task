import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding: 15px 44px 25px;
  background-color: #000000;
  border-radius: 5px;
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    right: -112px;
    bottom: -90px;
    display: block;
    width: 192px;
    height: 192px;

    border-radius: 50%;
    background-color: #1a1a1a;
  }

  &::after {
    content: '';
    position: absolute;
    right: 26px;
    bottom: 52px;
    display: block;
    width: 54px;
    height: 54px;

    border-radius: 50%;
    background-color: rgba(72, 72, 72, 0.5);
  }

  @media screen and (min-width: 1236px) {
    max-width: 491px;
    padding: 40px 40px 40px 36px;
    border-radius: 10px;
    text-align: left;

    &::before {
      right: -89px;
      bottom: -86px;
      width: 269px;
      height: 269px;
    }

    &::after {
      right: 70px;
      bottom: 71px;
      width: 138px;
      height: 138px;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 20px;

  @media screen and (min-width: 1236px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  margin-bottom: 12px;
  font-size: 11px;
  color: #c9c9c9;

  @media screen and (min-width: 1236px) {
    margin-bottom: 111px;
    font-size: 18px;
  }
`;

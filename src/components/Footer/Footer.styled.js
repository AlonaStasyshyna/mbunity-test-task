import styled from 'styled-components';

export const CustomizedFooter = styled.footer`
  padding-top: 19px;
  padding-bottom: 35px;
  background-color: #000000;

  @media screen and (min-width: 1236px) {
    padding-top: 80px;
    padding-bottom: 66px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 95px;
  justify-content: space-between;

  @media screen and (min-width: 1236px) {
    flex-wrap: nowrap;
    justify-content: center;
    gap: 0;
  }
`;

export const Logo = styled.a`
  position: relative;
  display: block;
  margin-bottom: 50px;
  text-align: center;
  font-weight: 800;
  font-size: 36px;
  line-height: calc(44 / 36);
  color: #ffffff;

  &::after {
    content: '';
    position: absolute;
    top: 64px;
    left: 0;
    display: block;
    width: 100%;
    height: 0;
    border: 1px solid #ffffff;
  }

  @media screen and (min-width: 1236px) {
    margin-bottom: 75px;

    &::after {
      top: 99px;
      left: 50%;
      transform: translate(-50%);
      max-width: 1280px;
    }
  }
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(26 / 16);

  @media screen and (min-width: 1236px) {
    font-size: 18px;
    line-height: calc(26 / 18);
  }
`;

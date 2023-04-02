import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainNav = styled.nav`
  @media screen and (max-width: 1235px) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: #000000;
    }
  }

  @media screen and (min-width: 1236px) {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.a`
  font-weight: 800;

  @media screen and (max-width: 1235px) {
    position: relative;
    z-index: 2;
    font-size: 18px;
    line-height: calc(22 / 18);
    color: ${p => (p.visibility === 'true' ? '#FFFFFF' : '#000000')};
  }

  @media screen and (min-width: 1236px) {
    padding-top: 10px;
    padding-bottom: 10px;

    font-size: 24px;
    line-height: calc(29 / 24);
    color: #000000;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  font-size: 14px;
  line-height: calc(16 / 14);

  @media screen and (max-width: 1235px) {
    position: absolute;
    top: 109px;
    left: 23px;
    width: 86%;
    flex-direction: column;
    z-index: 2;
    color: #ffffff;
  }

  @media screen and (min-width: 1236px) {
    margin-left: auto;
    gap: 47px;
    font-size: 16px;
    line-height: calc(19 / 16);
  }
`;

export const MainLink = styled(NavLink)`
  display: block;
  padding: 10px 0;

  &.active {
    font-weight: 700;
  }

  svg {
    margin-left: 7px;
    fill: #ffffff;
  }

  @media screen and (min-width: 1236px) {
    &.active {
      font-weight: 600;
    }

    svg {
      fill: #1f1f1f;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 36px;
  margin: 40px auto 0;

  @media screen and (min-width: 1236px) {
    margin: 0;

    li {
      padding: 4px 0;
    }
  }
`;

export const MainLinkWithIcon = styled(MainLink)`
  position: relative;
  width: 31px;
  height: 31px;
  padding: 7px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.75);

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    opacity: 1;
    background-size: cover;
  }

  @media screen and (min-width: 1236px) {
    border-color: rgba(0, 0, 0, 0.75);
  }
`;

import styled from 'styled-components';
import backgroundLetter from '../../images/backgroundLetter.png';
import checkIcon from '../../images/checkIcon.svg';

export const Section = styled.section`
  position: relative;
  padding: 30px 16px 64px;
  color: #8d8d8d;

  &::after {
    content: '';
    position: absolute;
    right: 142px;
    bottom: 0;
    display: block;
    width: 104px;
    height: 52px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${backgroundLetter});
  }

  @media screen and (min-width: 1236px) {
    padding: 50px 40px 50px 50px;

    &::after {
      right: 133px;
      bottom: -10px;
      width: 241px;
      height: 112px;
    }
  }
`;

export const Form = styled.form`
  label:focus-within {
    color: #000000;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;

  @media screen and (min-width: 1236px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 45px;
    margin-bottom: 45px;
  }
`;

export const DataLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-weight: 500;
  font-size: 12px;
  line-height: calc(20 / 12);
`;

export const DataInput = styled.input`
  width: 100%;
  padding-bottom: 11px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #8d8d8d;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(20 / 14);
  color: #8d8d8d;

  &:focus {
    color: #000000;
    border-color: #000000;
  }

  @media screen and (min-width: 1236px) {
    width: 278px;
  }
`;

export const SubjectText = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
  color: #000000;

  @media screen and (min-width: 1236px) {
    margin-bottom: 14px;
  }
`;

export const SubjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px 20px;
  margin-bottom: 25px;

  @media screen and (min-width: 1236px) {
    margin-bottom: 45px;
  }
`;

export const SubjectLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: calc(20 / 12);
  color: #000000;
`;

export const SubjectInput = styled.input`
  width: 13px;
  height: 13px;
  margin-right: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 3.5px;
    left: 0;
    display: block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #e0e0e0;
  }

  &:checked::before {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${checkIcon});
  }
`;

export const MessageLabel = styled(DataLabel)`
  gap: 5px;
  margin-bottom: 25px;

  @media screen and (min-width: 1236px) {
    margin-bottom: 45px;
  }
`;

export const MessageTextarea = styled(DataInput)`
  @media screen and (min-width: 1236px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;

  font-family: inherit;
  font-weight: 500;
  font-size: 13px;
  line-height: calc(19 / 13);
  color: #ffffff;

  background: #000000;
  box-shadow: 0px 0px 8.96262px rgba(0, 0, 0, 0.12);
  border: none;
  border-radius: 3px;

  @media screen and (min-width: 1236px) {
    width: 146px;
    padding: 15px;
    margin-right: 68px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

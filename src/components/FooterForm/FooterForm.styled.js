import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 17px 29px 14px 14px;
  background-color: #0d0d0d;
  border-radius: 5px;

  h3 {
    margin-bottom: 23px;

    @media screen and (min-width: 1236px) {
      margin-bottom: 29px;
    }
  }

  @media screen and (min-width: 1236px) {
    width: 304px;
    height: 185px;
    padding: 14px 13px 21px 14px;

    background-color: #131313;
    border-radius: 10px;
  }
`;

export const Form = styled.form`
  width: 277px;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
`;

export const Input = styled.input`
  width: 172px;
  border: none;
  padding: 11px 10px;
  font-size: 12px;
  line-height: calc(17 / 12);
  color: #ffffff;
  background-color: #1a1a1a;

  &::placeholder {
    font-size: 11px;
    line-height: calc(16 / 11);
    color: #616161;
  }
`;

export const Button = styled.button`
  width: 105px;
  padding-top: 11px;
  padding-bottom: 10px;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 12px;
  line-height: calc(18 / 12);
  color: #ffffff;
  background-color: #000000;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: calc(18 / 13);
  color: #ffffff;
  opacity: 0.5;
`;

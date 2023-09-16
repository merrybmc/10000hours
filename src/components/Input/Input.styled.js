import styled from 'styled-components';
import finger from '../../images/finger.svg';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 84px;
  gap: 27px;
`;

export const Words = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: gmarket;
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 14px;
    white-space: pre-wrap;
  }
`;

export const InputTag = styled.input`
  font-family: gmarket;
  width: 228px;
  height: 57px;
  font-size: 24px;
  font-weight: 400;
  margin: 0 17px;
  text-align: center;
  border-radius: 7px;
  border: none;

  @media (max-width: 767px) {
    width: 156px;
    height: 37px;
    font-size: 14px;
    margin: 0 4px;
  }

  &::placeholder {
    color: #babcbe;
    font-family: gmarket;
    font-size: 24px;
    font-weight: 400;
    text-align: center;

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
`;

export const BtnBox = styled.div`
  display: flex;
  margin-top: 88px;
`;

export const Btn = styled.button`
  color: #5b2386;

  text-align: center;
  font-family: gmarket;
  font-size: 24px;
  font-weight: 700;
  border-radius: 56px;
  padding: 21px 49px;

  background: #fcee21;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const FingerImg = styled.img`
  padding-top: 14px;
  padding-left: 7px;
`;

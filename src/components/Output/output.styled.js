import styled from 'styled-components';
import { Words } from '../Input/Input.styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 147px;
`;

export const WordsBox = styled.div`
  padding-bottom: 127px;
`;

export const OutputWords = styled(Words)`
  padding-bottom: 17px;
`;

export const StrongText = styled.strong`
  color: #fff;
  font-family: gmarket;
  font-size: 72px;
  font-weight: 700;
  padding: 0 12px;
`;

export const BtnBox = styled.div`
  display: flex;
  column-gap: 18px;
`;

export const GoBtn = styled.button`
  color: #5b2386;
  font-family: gmarket;
  font-size: 24px;
  font-weight: 700;
  border-radius: 56px;
  background: #fcee21;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  padding: 21px 49px;
`;

export const ShareBtn = styled(GoBtn)`
  background-color: #fff;
`;

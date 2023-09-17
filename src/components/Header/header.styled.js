import styled from 'styled-components';
import leftQuote from '../../images/leftQuote.svg';
import rightQuote from '../../images/rightQuote.svg';

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 140px;
`;

export const Logo = styled.img`
  padding-top: 54px;

  @media (max-width: 767px) {
    padding-top: 41px;
    width: 267px;
    height: 53px;
  }
`;

export const LogoCircle = styled.img`
  position: absolute;

  @media (max-width: 767px) {
    width: 125px;
    height: 126px;
  }
`;

export const Title = styled.h1`
  font-family: tvn;
  font-size: 36px;
  font-weight: 700;
  color: #f5df4d;
  padding-top: 125px;

  @media (max-width: 767px) {
    padding-top: 69px;
    font-size: 22px;
  }
`;

export const QuoteBox = styled.div`
  padding-top: 78px;
  position: relative;

  @media (max-width: 767px) {
    padding-top: 62px;
  }

  &::after {
    content: '';
    background-image: url(${rightQuote});
    position: absolute;
    right: -51px;
    top: 91px;
    width: 37px;
    height: 32px;

    @media (max-width: 767px) {
      top: 75px;
    }
  }

  &::before {
    content: '';
    display: inline-block;
    background-image: url(${leftQuote});
    /* position: absolute; */
    /* left: -51px; */
    /* top: 91px; */
    /* width: 37px; */
    /* height: 32px; */
    width: 37px;
    height: 32px;

    @media (max-width: 767px) {
      top: 75px;
    }
  }
`;

export const Quote = styled.h2`
  text-align: center;
  color: #fff;
  font-family: gmarket;
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 18px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const StrongSpan = styled.span`
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Test = styled.p`
  color: rgba(252, 238, 33, 0.3);
  text-align: center;
  font-family: gmarket;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  background-color: #fff;

  width: 800px;
  height: 800px;

  color: #5b2386;
  font-family: tvn;
  font-size: 96px;
  font-weight: 700;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);

  position: absolute;
`;

export const ModalBackUp = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Title = styled.p`
  font-size: 96px;

  padding-top: 76px;
  padding-bottom: 4px;
`;
export const SubText = styled.p`
  font-size: 36px;

  padding-bottom: 33px;
`;

export const LicatImg = styled.img`
  padding-bottom: 74px;
`;

export const Btn = styled.button`
  color: #5b2386;
  text-align: center;
  font-family: gmarket;
  font-size: 24px;
  font-weight: 700;
  border: none;

  padding: 21px 49px;
  border-radius: 56px;
  background: #fcee21;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;

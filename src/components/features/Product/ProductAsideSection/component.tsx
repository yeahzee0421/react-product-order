import styled from '@emotion/styled';

export const AsideContainer = styled.div`
  width: 100%;
  padding: 30px 12px 30px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const OptionContainer = styled.div`
  width: 100%;
  padding: 12px 14px 16px;
  border: 1px solid rgb(237, 237, 237);
  border-radius: 2px;
  .product-title {
    font-weight: 700;
    line-height: 22px;
  }
`;

export const OptionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
  gap: 8px;
`;

export const Modals = styled.div`
  padding: 12px 0px 0px;
`;

export const ProductCost = styled.div`
  margin-bottom: 20px;
  padding: 18px 20px;
  border-radius: 4px;
  background-color: rgb(245, 245, 245);
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  span {
    font-size: 20px;
    letter-spacing: -0.02em;
  }
`;

export const GiftButton = styled.button`
  width: 100%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 200ms ease 0s;
  height: 60px;
  font-size: 16px;
  color: rgb(255, 255, 255);
  background-color: rgb(17, 17, 17);
`;

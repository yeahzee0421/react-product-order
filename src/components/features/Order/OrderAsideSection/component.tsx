import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid rgb(237, 237, 237);
  border-right: 1px solid rgb(237, 237, 237);
  padding: 16px;
  .order-aside-title {
    adding: 24px 0px 20px;
  }
  .span-title {
    font-size: 18px;
    line-height: 21px;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    font-weight: 700;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 16px;
`;

export const TotalCost = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .totalCost-text {
    font-size: 15px;
    line-height: 24px;
    font-weight: 700;
    color: rgb(0, 0, 0);
  }
  .totalCost {
    font-size: 18px;
    line-height: 21px;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    font-weight: 700;
  }
`;

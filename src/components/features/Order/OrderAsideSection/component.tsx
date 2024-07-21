import styled from '@emotion/styled';

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

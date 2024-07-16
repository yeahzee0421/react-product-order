import styled from '@emotion/styled';

import { breakpoints } from '@/styles/variants';

export const Contents = styled.article`
  width: 100%;
  padding: 16px 16px 60px;
  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 32px 32px 80px;
  }
`;

export const ContentHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.sm}) {
    flex-direction: row;
  }
`;

export const ContentBody = styled.div`
  width: 100%;
  color: rgb(17, 17, 17);
  @media screen and (min-width: ${breakpoints.sm}) {
    padding-left: 24px;
  }
  .product-title {
    padding-top: 24px;
    font-size 24px;
    line-height: 33px;
    font-weight: 400;
  }
  .product-price {
    width: 100%;
    min-height: 120px;
    padding-top: 16px;
    font-size: 30px;
    line-height: 52px;
    color: rgb(34, 34, 34);
  }
  .product-description {
    padding: 24px 12px;
    font-size: 14px;
    font-weight: 700; 
  }
`;

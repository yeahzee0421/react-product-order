import styled from '@emotion/styled';

export const Container = styled.div`
  border-left: 1px solid rgb(229, 229, 229);
  height: calc(-54px + 100vh);
`;

export const MessageSection = styled.section`
  width: 100%;
  padding: 44px 0px 32px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  span {
    font-size: 18px;
    line-height: 21px;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    font-weight: 700;
  }
`;

export const MessageForm = styled.div`
  width: 100%;
  padding: 12px 30px 16px;
`;

export const DetailSection = styled.section`
  width: 100%;
  padding: 16px;
  span {
    font-size: 15px;
    line-height: 24px;
    font-weight: 700;
    color: rgb(0, 0, 0);
  }
`;

export const Gap = styled.div`
  width: 100%;
  background-color: inherit;
  height: 16px;
`;

export const Contents = styled.div`
  width: 100%;
  padding: 20px 16px 16px;
  border-radius: 8px;
  border: 1px solid rgb(237, 237, 237);
  box-shadow: rgba(0, 0, 0, 0.02) 0px 4px 8px;
`;

export const Content = styled.div`
  display: flex;
`;

export const Detail = styled.div`
  padding-left: 8px;
  .brand-name {
    font-size: 13px;
    line-height: 14px;
    color: rgb(136, 136, 136);
    font-weight: 400;
  }
  .product-name {
    font-size: 14px;
    line-height: 18px;
    margin-top: 3px;
    color: rgb(34, 34, 34);
    overflow: hidden;
    font-weight: 400;
  }
`;

export const Image = styled.div`
  display: flex;
`;

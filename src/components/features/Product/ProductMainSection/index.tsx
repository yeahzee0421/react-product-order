import { Divider } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { breakpoints } from '@/styles/variants';

export const ProductMainSection = () => {
  const product = {
    imgSrc:
      'https://st.kakaocdn.net/product/gift/product/20240703140657_19263fd5455146b0a308a4e0d6bacc6a.png',
    title: '[단독각인] 피렌체 1221 에디션 오드코롱 50ml (13종 택1)',
    price: '145000원',
    description: '카톡 친구가 아니어도 선물 코드로 선물 할 수 있어요!',
  };

  return (
    <Main>
      <Contents>
        <ContentHeader>
          <img
            src={product.imgSrc}
            alt={product.title}
            style={{ width: '100%', maxWidth: '450px' }}
          />
          <ContentBody>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <Divider orientation="horizontal" />
            <p>{product.description}</p>
            <Divider orientation="horizontal" />
          </ContentBody>
        </ContentHeader>
      </Contents>
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  max-width: 900px;
`;

const Contents = styled.article`
  width: 100%;
  padding: 16px 16px 60px;
  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 32px 32px 80px;
  }
`;

const ContentHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.sm}) {
    flex-direction: row;
  }
`;

const ContentBody = styled.div`
  width: 100%;
  color: rgb(17, 17, 17);
  @media screen and (min-width: ${breakpoints.sm}) {
    padding-left: 24px;
  }
  h2 {
    padding-top: 24px;
    font-size 24px;
    line-height: 33px;
    font-weight: 400;
  }
  h3 {
    width: 100%;
    min-height: 120px;
    padding-top: 16px;
    font-size: 30px;
    line-height: 52px;
    color: rgb(34, 34, 34);
  }
  p {
    padding: 24px 12px;
    font-size: 14px;
    font-weight: 700; 
  }
`;

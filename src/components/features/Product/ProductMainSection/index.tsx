import { Divider } from '@chakra-ui/react';

import { Main } from '@/components/common/layouts/Split';

import { ContentBody, ContentHeader, Contents } from './component';

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
            <h2 className="product-title">{product.title}</h2>
            <h2 className="product-price">{product.price}</h2>
            <Divider orientation="horizontal" />
            <p className="product-description">{product.description}</p>
            <Divider orientation="horizontal" />
          </ContentBody>
        </ContentHeader>
      </Contents>
    </Main>
  );
};

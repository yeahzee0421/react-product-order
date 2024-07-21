import { Divider } from '@chakra-ui/react';

import type { ProductDetailsData } from '@/api/hooks/useGetProductDetails';
import { Main } from '@/components/common/layouts/Split';

import { ContentBody, ContentHeader, Contents } from './component';

export const ProductMainSection = ({ detail }: ProductDetailsData) => {
  return (
    <Main>
      <Contents>
        <ContentHeader>
          <img
            src={detail.imageURL}
            alt={detail.name}
            style={{ width: '100%', maxWidth: '450px' }}
          />
          <ContentBody>
            <h2 className="product-title">{detail.name}</h2>
            <h2 className="product-price">{detail.price.sellingPrice}원</h2>
            <Divider orientation="horizontal" />
            <p className="product-description">
              카톡 친구가 아니어도 선물 코드로 선물 할 수 있어요!
            </p>
            <Divider orientation="horizontal" />
          </ContentBody>
        </ContentHeader>
      </Contents>
    </Main>
  );
};

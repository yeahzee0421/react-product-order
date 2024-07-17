import { Divider } from '@chakra-ui/react';

import type { ProductsDetailResponseData } from '@/api/hooks/useGetProductDetails';
import { Main } from '@/components/common/layouts/Split';

import { ContentBody, ContentHeader, Contents } from './component';

type Props = {
  product: ProductsDetailResponseData;
};

export const ProductMainSection = ({ product }: Props) => {
  return (
    <Main>
      <Contents>
        <ContentHeader>
          <img
            src={product.detail.imageURL}
            alt={product.detail.name}
            style={{ width: '100%', maxWidth: '450px' }}
          />
          <ContentBody>
            <h2 className="product-title">{product.detail.name}</h2>
            <h2 className="product-price">{product.detail.price.sellingPrice}원</h2>
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

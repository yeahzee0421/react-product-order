import type { ProductsDetailResponseData } from '@/api/hooks/useGetProductDetails';
import { Image } from '@/components/common/Image';

import { Content, Contents, Detail, DetailSection, Gap } from './component';

type Props = {
  product: ProductsDetailResponseData;
};

export const OrderMainSection = ({ product }: Props) => {
  return (
    <DetailSection>
      <span>선물내역</span>
      <Gap />
      <Contents>
        <Content>
          <Image width="86px" ratio="square" src={product.detail.imageURL} />
          <Detail>
            <p className="brand-name">{product.detail.brandInfo.name}</p>
            <p className="product-name">{product.detail.name}</p>
          </Detail>
        </Content>
      </Contents>
    </DetailSection>
  );
};

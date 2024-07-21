import { Image } from '@/components/common/Image';
import type { GoodsData } from '@/types';

import { Content, Contents, Detail, DetailSection, Gap } from './component';

type Props = {
  product: GoodsData;
};

export const OrderMainSection = ({ product }: Props) => {
  return (
    <DetailSection>
      <span>선물내역</span>
      <Gap />
      <Contents>
        <Content>
          <Image width="86px" ratio="square" src={product.imageURL} />
          <Detail>
            <p className="brand-name">{product.brandInfo.name}</p>
            <p className="product-name">{product.name}</p>
          </Detail>
        </Content>
      </Contents>
    </DetailSection>
  );
};

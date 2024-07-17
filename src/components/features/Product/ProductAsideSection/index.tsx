import { Button, Icon, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { ProductsDetailResponseData } from '@/api/hooks/useGetProductDetails';
import { Aside } from '@/components/common/layouts/Split';

import {
  AsideContainer,
  GiftButton,
  Modals,
  OptionBox,
  OptionContainer,
  ProductCost,
} from './component';

type Props = {
  product: ProductsDetailResponseData;
};

export const ProductAsideSection = ({ product }: Props) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const moveToOrderPage = () => {
    navigate('/order', { state: { product: { product, quantity } } });
  };

  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 100));
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <Aside>
      <AsideContainer>
        <OptionContainer>
          <p className="product-title">{product.detail.name}</p>
          <OptionBox>
            <Button
              type="button"
              aria-label="수량 1개 감소"
              role="button"
              onClick={decreaseQuantity}
            >
              <Icon viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <g fill="currentColor">
                  <rect height={4} width={20} x={2} y={10} />
                </g>
              </Icon>
            </Button>
            <Input
              inputMode="decimal"
              type="text"
              pattern="[0-9]*(.[0-9]+)?"
              role="spinbutton"
              aria-valuemin={1}
              aria-valuemax={100}
              aria-valuenow={quantity}
              aria-valuetext={String(quantity)}
              autoComplete="off"
              autoCorrect="off"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <Button
              type="button"
              aria-label="수량 1개 추가"
              role="button"
              onClick={increaseQuantity}
            >
              <Icon viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"
                />
              </Icon>
            </Button>
          </OptionBox>
        </OptionContainer>
        <Modals>
          <ProductCost>
            총 결제 금액
            <span>{product.detail.price.sellingPrice * quantity}</span>
          </ProductCost>
          <GiftButton onClick={moveToOrderPage}>나에게 선물하기</GiftButton>
        </Modals>
      </AsideContainer>
    </Aside>
  );
};

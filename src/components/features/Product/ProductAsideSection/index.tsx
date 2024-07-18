import { Button, Icon, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { ProductsDetailResponseData } from '@/api/hooks/useGetProductDetails';
import { useProductOptions } from '@/api/hooks/useGetProductOptions';
import { Aside } from '@/components/common/layouts/Split';
import { Spinner } from '@/components/common/Spinner';
import { useAuth } from '@/provider/Auth';

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
  const auth = useAuth();
  const productId = product.detail.id;
  const { data, isLoading } = useProductOptions(productId.toString());

  if (isLoading)
    return (
      <TextView>
        <Spinner />
      </TextView>
    );

  if (!data) {
    return <TextView>상품 옵션이 존재하지 않습니다.</TextView>;
  }

  const moveToOrderPage = () => {
    if (auth) {
      navigate('/order', { state: { product: { product, quantity } } });
    } else {
      const confirmed = window.confirm(
        '로그인이 필요한 메뉴입니다. 로그인 페이지로 이동하시겠습니까?',
      );
      if (confirmed) {
        navigate('/login');
      }
    }
  };

  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 100));
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setQuantity(value);
    }
  };

  const getTotalCost = () => {
    return product.detail.price.sellingPrice * quantity;
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
            <Input value={quantity} onChange={handleQuantityChange} />
            <StyledButton
              type="button"
              aria-label="수량 1개 추가"
              role="button"
              onClick={increaseQuantity}
              disabled={quantity >= data.giftOrderLimit}
            >
              <Icon viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"
                />
              </Icon>
            </StyledButton>
          </OptionBox>
        </OptionContainer>
        <Modals>
          <ProductCost>
            총 결제 금액
            <span>{getTotalCost()}</span>
          </ProductCost>
          <GiftButton onClick={moveToOrderPage}>나에게 선물하기</GiftButton>
        </Modals>
      </AsideContainer>
    </Aside>
  );
};

const StyledButton = styled(Button)<{ disabled: boolean }>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const TextView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 16px 60px;
  font-size: 16px;
`;

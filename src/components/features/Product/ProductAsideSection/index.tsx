import { Button, Icon, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { ProductDetailsData } from '@/api/hooks/useGetProductDetails';
import { useProductOptions } from '@/api/hooks/useGetProductOptions';
import { PLUS_ICON } from '@/components/common/Icon/constant';
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

export const ProductAsideSection = ({ detail }: ProductDetailsData) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const auth = useAuth();
  const productId = detail.id;
  const { data, isLoading } = useProductOptions(productId);

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
      navigate('/order', { state: { product: { detail, quantity } } });
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
    return detail.price.sellingPrice * quantity;
  };

  return (
    <Aside>
      <AsideContainer>
        <OptionContainer>
          <p className="product-title">{detail.name}</p>
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
                <path fill="currentColor" d={PLUS_ICON} />
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

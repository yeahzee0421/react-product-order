import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

import { Container } from '@/components/common/layouts/Container';
import RetryErrorBoundary from '@/components/common/RetryErrorBoundary';
import { OrderAsideSection } from '@/components/features/Order/OrderAsideSection';
import { OrderMainSection } from '@/components/features/Order/OrderMainSection';

export const OrderPage = () => {
  const location = useLocation();
  const productData = location.state.product;
  const quantity = productData.quantity;

  const getTotalCost = () => {
    const sellingPrice = productData.product.detail.price.sellingPrice;
    return sellingPrice * quantity;
  };

  return (
    <form action="true">
      <FormWrapper>
        <Container maxWidth="1280px" justifyContent="flex-start" alignItems="flex-start">
          <InnerContainer>
            <RetryErrorBoundary>
              <OrderMainSection product={productData.product} />
            </RetryErrorBoundary>
            <RetryErrorBoundary>
              <OrderAsideSection
                productId={productData.product.detail.id}
                totalCost={getTotalCost()}
              />
            </RetryErrorBoundary>
          </InnerContainer>
        </Container>
      </FormWrapper>
    </form>
  );
};

const FormWrapper = styled.div`
  width: 100%;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import { useProductDetails } from '@/api/hooks/useGetProductDetails';
import { Container } from '@/components/common/layouts/Container';
import RetryErrorBoundary from '@/components/common/RetryErrorBoundary';
import { Spinner } from '@/components/common/Spinner';
import { ProductAsideSection } from '@/components/features/Product/ProductAsideSection';
import { ProductMainSection } from '@/components/features/Product/ProductMainSection';

export const ProductDetailPage = () => {
  const { productId = '' } = useParams<{ productId: string }>();
  const { data, isLoading, isError } = useProductDetails(productId);
  if (isLoading)
    return (
      <TextView>
        <Spinner />
      </TextView>
    );
  if (isError) return <TextView>에러가 발생했습니다.</TextView>;
  if (!data) return <TextView>해당 상품에 대한 정보가 없습니다.</TextView>;

  return (
    <Wrapper>
      <Container maxWidth="1280px" justifyContent="flex-start" alignItems="flex-start">
        <InnerContainer>
          <RetryErrorBoundary>
            <ProductMainSection product={data} />
          </RetryErrorBoundary>
          <RetryErrorBoundary>
            <ProductAsideSection product={data} />
          </RetryErrorBoundary>
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

const TextView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 16px 60px;
  font-size: 16px;
`;

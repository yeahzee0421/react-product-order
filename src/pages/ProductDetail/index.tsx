import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';

import { queryKeys, useProductDetailsQuery } from '@/api/hooks/useGetProductDetails';
import { Container } from '@/components/common/layouts/Container';
import RetryErrorBoundary from '@/components/common/RetryErrorBoundary';
import { Spinner } from '@/components/common/Spinner';
import { ProductAsideSection } from '@/components/features/Product/ProductAsideSection';
import { ProductMainSection } from '@/components/features/Product/ProductMainSection';
import { RouterPath } from '@/routes/path';

export const ProductDetailPage = () => {
  const { productId: productIdString = '' } = useParams<{ productId: string }>();
  const productId = Number(productIdString);
  const { data, isLoading } = useProductDetailsQuery(productId, {
    queryKey: queryKeys.detailsByProductId(productId),
    staleTime: 6000,
  });
  const navigate = useNavigate();

  if (isLoading)
    return (
      <TextView>
        <Spinner />
      </TextView>
    );

  if (!data) {
    alert('해당 상품에 대한 정보가 없습니다.');
    navigate(RouterPath.home);
    return null;
  }

  return (
    <Wrapper>
      <Container maxWidth="1280px" justifyContent="flex-start" alignItems="flex-start">
        <InnerContainer>
          <RetryErrorBoundary>
            <ProductMainSection detail={data.detail} />
          </RetryErrorBoundary>
          <RetryErrorBoundary>
            <ProductAsideSection detail={data.detail} />
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

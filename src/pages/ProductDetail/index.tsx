import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import { useProductDetails } from '@/api/hooks/useGetProductDetails';
import { Container } from '@/components/common/layouts/Container';
import { ProductAsideSection } from '@/components/features/Product/ProductAsideSection';
import { ProductMainSection } from '@/components/features/Product/ProductMainSection';

export const ProductDetailPage = () => {
  const { productId = '' } = useParams<{ productId: string }>();
  const { data, isLoading, isError } = useProductDetails(productId);

  if (isLoading || isError) return null;
  if (!data) return null;

  return (
    <Wrapper>
      <Container maxWidth="1280px" justifyContent="flex-start" alignItems="flex-start">
        <InnerContainer>
          <ProductMainSection product={data} />
          <ProductAsideSection product={data} />
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

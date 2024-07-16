import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';
import { ProductAsideSection } from '@/components/features/Product/ProductAsideSection';
import { ProductMainSection } from '@/components/features/Product/ProductMainSection';

export const ProductDetailPage = () => {
  return (
    <Wrapper>
      <Container maxWidth="1280px" justifyContent="flex-start" alignItems="flex-start">
        <InnerContainer>
          <ProductMainSection />
          <ProductAsideSection />
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

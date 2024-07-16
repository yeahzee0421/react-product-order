import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';
import { OrderAsideSection } from '@/components/features/Order/OrderAsideSection';
import { OrderMainSection } from '@/components/features/Order/OrderMainSection';

export const OrderPage = () => {
  return (
    <form action="true">
      <FormWrapper>
        <Container maxWidth="1280px" justifyContent="flex-start" alignItems="flex-start">
          <InnerContainer>
            <OrderMainSection />
            <OrderAsideSection />
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

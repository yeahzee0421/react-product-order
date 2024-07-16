import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';
import { OrderMainSection } from '@/components/features/Order/OrderMainSection';

export const OrderPage = () => {
  return (
    <form action="true">
      <FormWrapper>
        <Container maxWidth="1280px" justifyContent="flex-start" alignItems="flex-start">
          <OrderMainSection />
        </Container>
      </FormWrapper>
    </form>
  );
};

const FormWrapper = styled.div`
  width: 100%;
`;

import { Divider } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from '@/components/common/layouts/Container';
import { SplitContainer } from '@/components/common/layouts/Split';
import {
  CashReceiptForm,
  validateReceiptForm,
} from '@/components/features/Order/Form/CashReceiptFormSection';
import {
  MessageFormSection,
  validateMessageForm,
} from '@/components/features/Order/Form/MessageFormSection';
import { OrderAsideSection } from '@/components/features/Order/OrderAsideSection';
import { OrderMainSection } from '@/components/features/Order/OrderMainSection';
import { storageOrderHistory } from '@/components/features/Order/util/storage';

type FormData = {
  message: string;
  cashReceiptData: {
    isReceiptChecked: boolean;
    receiptNumber: string;
  };
};

export const OrderPage = () => {
  const location = useLocation();
  const productData = location.state.product;
  const productId = productData.detail.id;
  const quantity = productData.quantity;

  console.log(productData);

  const [formData, setFormData] = useState<FormData>({
    message: '',
    cashReceiptData: { isReceiptChecked: false, receiptNumber: '' },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const messageError = validateMessageForm(formData.message);
    const receiptError = validateReceiptForm(formData.cashReceiptData);

    if (messageError) {
      alert(`${messageError}`);
      return;
    }
    if (receiptError) {
      alert(`${receiptError}`);
      return;
    }
    storageOrderHistory(productId);
    alert('주문이 완료되었습니다.');
  };

  const getTotalCost = () => {
    const sellingPrice = productData.detail.price.sellingPrice;
    return sellingPrice * quantity;
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormWrapper>
        <Container maxWidth="1280px" justifyContent="flex-start" alignItems="flex-start">
          <SplitContainer>
            <div>
              <MessageFormSection
                onMessageChange={(message) => setFormData({ ...formData, message })}
              />
              <OrderMainSection product={productData.detail} />
            </div>
            <div>
              <h6 className="order-aside-title">
                <span className="span-title">결제 정보</span>
              </h6>
              <Divider aria-orientation="horizontal" />
              <CashReceiptForm
                onReceiptDataChange={(cashReceiptData) =>
                  setFormData({ ...formData, cashReceiptData })
                }
              />
              <OrderAsideSection totalCost={getTotalCost()} />
            </div>
          </SplitContainer>
        </Container>
      </FormWrapper>
    </form>
  );
};

const FormWrapper = styled.div`
  width: 100%;
`;

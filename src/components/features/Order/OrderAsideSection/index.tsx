import { Checkbox, Divider, Input, Select } from '@chakra-ui/react';

import { Button } from '@/components/common/Button';
import { Aside } from '@/components/common/layouts/Split';

import { Gap } from '../OrderMainSection/component';
import { FormContainer, TotalCost, Wrapper } from './component';

type Props = {
  totalCost: number;
};

export const OrderAsideSection = ({ totalCost }: Props) => {
  const handleOrderSubmit = () => {
    alert('주문이 완료되었습니다.');
  };
  return (
    <Aside>
      <Wrapper>
        <h6 className="order-aside-title">
          <span className="span-title">결제 정보</span>
        </h6>
        <Divider aria-orientation="horizontal" />
        <FormContainer>
          <Checkbox colorScheme="orange">현금영수증 신청</Checkbox>
          <Gap />
          <Select name="cashReceiptType">
            <option value="PERSONAL">개인소득공제</option>
            <option value="BUSINESS">사업자증빙용</option>
          </Select>
          <div style={{ height: '8px' }} />
          <Input name="cashReceiptNumber" placeholder="(-없이) 숫자만 입력해주세요." />
        </FormContainer>
        <Divider aria-orientation="horizontal" />
        <TotalCost>
          <span className="totalCost-text">최종 결제금액</span>
          <span className="totalCost">{totalCost}원</span>
        </TotalCost>
        <div style={{ height: '32' }} />
        <Button theme="kakao" onClick={handleOrderSubmit}>
          {totalCost}원 결제하기
        </Button>
      </Wrapper>
    </Aside>
  );
};

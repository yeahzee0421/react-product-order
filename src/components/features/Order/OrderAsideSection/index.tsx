import { Checkbox, Divider, Input, Select } from '@chakra-ui/react';

import { Button } from '@/components/common/Button';
import { Aside } from '@/components/common/layouts/Split';

import { Gap } from '../OrderMainSection/component';
import { FormContainer, TotalCost, Wrapper } from './component';

export const OrderAsideSection = () => {
  return (
    <Aside>
      <Wrapper>
        <h6 className="order-aside-title">
          <span className="span-title">결제 정보</span>
        </h6>
        <Divider aria-orientation="horizontal" />
        <FormContainer>
          <Checkbox iconColor="orange">현금영수증 신청</Checkbox>
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
          <span className="totalCost">145000원</span>
        </TotalCost>
        <div style={{ height: '32' }} />
        <Button theme="kakao">145000원 결제하기</Button>
      </Wrapper>
    </Aside>
  );
};

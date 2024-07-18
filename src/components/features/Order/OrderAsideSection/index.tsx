import { Divider } from '@chakra-ui/react';

import { Button } from '@/components/common/Button';
import { Aside } from '@/components/common/layouts/Split';

import { CashReceiptForm } from '../Form/CashReceiptForm';
import { TotalCost, Wrapper } from './component';

type Props = {
  totalCost: number;
};

export const OrderAsideSection = ({ totalCost }: Props) => {
  return (
    <Aside>
      <Wrapper>
        <h6 className="order-aside-title">
          <span className="span-title">결제 정보</span>
        </h6>
        <Divider aria-orientation="horizontal" />
        <CashReceiptForm />
        <Divider aria-orientation="horizontal" />
        <TotalCost>
          <span className="totalCost-text">최종 결제금액</span>
          <span className="totalCost">{totalCost}원</span>
        </TotalCost>
        <div style={{ height: '32' }} />
        <Button theme="kakao">{totalCost}원 결제하기</Button>
      </Wrapper>
    </Aside>
  );
};

import { Divider } from '@chakra-ui/react';

import { Button } from '@/components/common/Button';

import { TotalCost } from './component';

type Props = {
  totalCost: number;
};

export const OrderAsideSection = ({ totalCost }: Props) => {
  return (
    <>
      <Divider aria-orientation="horizontal" />
      <TotalCost>
        <span className="totalCost-text">최종 결제금액</span>
        <span className="totalCost">{totalCost}원</span>
      </TotalCost>
      <div style={{ height: '32' }} />
      <Button theme="kakao">{totalCost}원 결제하기</Button>
    </>
  );
};

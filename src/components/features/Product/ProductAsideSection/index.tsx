import { Button, Icon, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { Aside } from '@/components/common/layouts/Split';

export const ProductAsideSection = () => {
  const product = {
    title: '[단독각인] 피렌체 1221 에디션 오드코롱 50ml (13종 택1)',
    totalCost: '145000원',
  };

  return (
    <Aside>
      <AsideContainer>
        <OptionContainer>
          <p>{product.title}</p>
          <OptionBox>
            <Button
              type="button"
              aria-label="수량 1개 감소"
              role="button"
              tabIndex={-1}
              aria-disabled="true"
            >
              <Icon viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <g fill="currentColor">
                  <rect height={4} width={20} x={2} y={10} />
                </g>
              </Icon>
            </Button>
            <Input
              inputMode="decimal"
              type="text"
              pattern="[0-9]*(.[0-9]+)?"
              role="spinbutton"
              aria-valuemin={1}
              aria-valuemax={100}
              aria-valuenow={1}
              aria-valuetext="1"
              autoComplete="off"
              autoCorrect="off"
              value={1}
            />
            <Button
              type="button"
              aria-label="수량 1개 추가"
              role="button"
              tabIndex={-1}
              aria-disabled="true"
            >
              <Icon viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"
                />
              </Icon>
            </Button>
          </OptionBox>
        </OptionContainer>
        <Modals>
          <ProductCost>
            총 결제 금액
            <span>{product.totalCost}</span>
          </ProductCost>
          <GiftButton>나에게 선물하기</GiftButton>
        </Modals>
      </AsideContainer>
    </Aside>
  );
};

const AsideContainer = styled.div`
  width: 100%;
  padding: 30px 12px 30px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OptionContainer = styled.div`
  width: 100%;
  padding: 12px 14px 16px;
  border: 1px solid rgb(237, 237, 237);
  border-radius: 2px;
`;
const OptionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
  gap: 8px;
  p {
    font-weight: 700;
    line-height: 22px;
  }
`;

const Modals = styled.div`
  padding: 12px 0px 0px;
`;

const ProductCost = styled.div`
  margin-bottom: 20px;
  padding: 18px 20px;
  border-radius: 4px;
  background-color: rgb(245, 245, 245);
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  span {
    font-size: 20px;
    letter-spacing: -0.02em;
  }
`;

const GiftButton = styled.button`
  width: 100%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 200ms ease 0s;
  height: 60px;
  font-size: 16px;
  color: rgb(255, 255, 255);
  background-color: rgb(17, 17, 17);
`;

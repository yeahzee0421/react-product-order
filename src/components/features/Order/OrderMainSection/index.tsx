import { Textarea } from '@chakra-ui/react';

import { Image } from '@/components/common/Image';
import { Main } from '@/components/common/layouts/Split';

import {
  Container,
  Content,
  Contents,
  Detail,
  DetailSection,
  Gap,
  Header,
  MessageForm,
  MessageSection,
} from './component';

export const OrderMainSection = () => {
  const product = {
    imgSrc:
      'https://st.kakaocdn.net/product/gift/product/20240703140657_19263fd5455146b0a308a4e0d6bacc6a.png',
    brand: '산타마리아노벨라',
    title: '[단독각인] 피렌체 1221 에디션 오드코롱 50ml (13종 택1) X 1개',
  };
  return (
    <Main>
      <Container>
        <MessageSection>
          <Header>
            <span>나에게 주는 선물</span>
          </Header>
          <MessageForm>
            <Textarea
              name="messageCardTextMessage"
              placeholder="선물과 함께 보낼 메시지를 적어보세요"
            />
          </MessageForm>
        </MessageSection>
        <DetailSection>
          <span>선물내역</span>
          <Gap />
          <Contents>
            <Content>
              <Image width="86px" ratio="square" src={product.imgSrc} />
              <Detail>
                <p className="brand-name">{product.brand}</p>
                <p className="product-name">{product.title}</p>
              </Detail>
            </Content>
          </Contents>
        </DetailSection>
      </Container>
    </Main>
  );
};

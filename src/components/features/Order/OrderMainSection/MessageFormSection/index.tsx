import { Textarea } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const MessageFormSection = () => {
  return (
    <Wrapper>
      <Header>
        <span>나에게 주는 선물</span>
      </Header>
      <MessageForm>
        <Textarea
          name="messageCardTextMessage"
          placeholder="선물과 함께 보낼 메시지를 적어보세요"
        />
      </MessageForm>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding: 44px 0px 32px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  span {
    font-size: 18px;
    line-height: 21px;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    font-weight: 700;
  }
`;

const MessageForm = styled.div`
  width: 100%;
  padding: 12px 30px 16px;
`;

import { Textarea } from '@chakra-ui/react';
import styled from '@emotion/styled';
import type { ChangeEvent} from 'react';
import { useState } from 'react';

type MessageFormProps = {
  onMessageChange: (message: string) => void;
};

export const MessageFormSection = ({ onMessageChange }: MessageFormProps) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    onMessageChange(newMessage);
  };

  return (
    <Wrapper>
      <Header>
        <span>나에게 주는 선물</span>
      </Header>
      <MessageForm>
        <Textarea
          name="messageCardTextMessage"
          placeholder="선물과 함께 보낼 메시지를 적어보세요"
          value={message}
          onChange={handleMessageChange}
        />
      </MessageForm>
    </Wrapper>
  );
};

export const validateMessageForm = (message: string) => {
  let messageError = '';
  if (message.trim().length === 0) messageError = '메세지를 입력해주세요.';
  if (message.trim().length > 100) messageError = '메세지는 100자 이내로 입력해주세요.';
  return messageError;
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

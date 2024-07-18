import { Checkbox, Input, Select } from '@chakra-ui/react';

import { FormContainer } from '../../OrderAsideSection/component';
import { Gap } from '../../OrderMainSection/component';

export const CashReceiptForm = () => {
  return (
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
  );
};

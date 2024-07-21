import { Checkbox, Input, Select } from '@chakra-ui/react';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { FormContainer } from '../../OrderAsideSection/component';
import { Gap } from '../../OrderMainSection/component';

type CashReceiptFormProps = {
  onReceiptDataChange: (data: CashReceiptData) => void;
};

type CashReceiptData = {
  isReceiptChecked: boolean;
  receiptNumber: string;
};

export const CashReceiptForm = ({ onReceiptDataChange }: CashReceiptFormProps) => {
  const [cashReceiptData, setCashReceiptData] = useState<CashReceiptData>({
    isReceiptChecked: false,
    receiptNumber: '',
  });

  const handleCheckBoxChange = () => {
    const checkBoxEvent = !cashReceiptData.isReceiptChecked;
    setCashReceiptData((prev) => {
      const newData = { ...prev, isReceiptChecked: checkBoxEvent };
      onReceiptDataChange(newData);
      return newData;
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const receiptNumber = e.target.value;
    setCashReceiptData((prev) => {
      const newData = { ...prev, receiptNumber: receiptNumber };
      onReceiptDataChange(newData);
      validateReceiptForm(newData);
      return newData;
    });
  };

  return (
    <FormContainer>
      <Checkbox
        colorScheme="orange"
        isChecked={cashReceiptData.isReceiptChecked}
        onChange={handleCheckBoxChange}
      >
        현금영수증 신청
      </Checkbox>
      <Gap />
      <Select name="cashReceiptType">
        <option value="PERSONAL">개인소득공제</option>
        <option value="BUSINESS">사업자증빙용</option>
      </Select>
      <div style={{ height: '8px' }} />
      <Input
        name="cashReceiptNumber"
        placeholder="(-없이) 숫자만 입력해주세요."
        onChange={handleInputChange}
      />
    </FormContainer>
  );
};

export const validateReceiptForm = (data: CashReceiptData) => {
  let receiptError = '';
  if (data.isReceiptChecked && data.receiptNumber.trim().length === 0) {
    receiptError = '현금영수증 번호를 입력해주세요';
  }
  if (!/^\d*$/.test(data.receiptNumber)) {
    receiptError = '현금영수증 번호는 숫자로만 입력해주세요.';
  }
  return receiptError;
};

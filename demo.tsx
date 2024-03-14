import React, { useState } from 'react';
import { Button, DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import './index.css';

const { RangePicker } = DatePicker;

const App: React.FC = () => {
  const [value, setValue] = useState<any>();

  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
        allowEmpty={[true, false]}
        placeholder={['有效起期', '有效止期']}
      />
      <Button
        onClick={() => {
          setValue([null, dayjs('9999-01-01')]);
        }}
      >
        长期有效
      </Button>
    </Space>
  );
};
export default App;

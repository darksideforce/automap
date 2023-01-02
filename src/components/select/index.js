import { Select } from 'antd';
import React from 'react';
const { Option } = Select;


const BasicInput = () => {
  const handleChange = ()=>{
  }
  return (
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  )
}
export default BasicInput
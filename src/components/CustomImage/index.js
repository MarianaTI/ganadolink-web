import React from 'react';
import { StyledFileInput } from './index.style';

const CustomImage = ({ name, onChange }) => {
  return (
    <StyledFileInput
      type="file"
      name={name}
      onChange={onChange}
    />
  );
};

export default CustomImage;

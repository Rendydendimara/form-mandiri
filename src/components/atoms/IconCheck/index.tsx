import React from 'react';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';

interface IProps {}

const IconCheck: React.FC<IProps> = () => {
  return (
    <CheckIcon
      style={{
        width: 16,
        height: 16,
      }}
    />
  );
};

export default IconCheck;

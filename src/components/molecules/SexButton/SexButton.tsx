import React from 'react';
import { Wrapper } from './SexButton.styles';

const SexButton = () => {
  return (
    <Wrapper>
      <label className="sex">Sex</label>
      <div>
        <label>
          <input type="radio" name="sex" value="Male" />
          Male
        </label>
        <label>
          <input type="radio" name="sex" value="Female" />
          Female
        </label>
      </div>
    </Wrapper>
  );
};

export default SexButton;

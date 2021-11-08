import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const SexButton = () => {
  return (
    <Wrapper>
      <label>
        <input type="radio" name="sex" value="Male" />
        Male
      </label>
      <label>
        <input type="radio" name="sex" value="Female" />
        Female
      </label>
    </Wrapper>
  );
};

export default SexButton;

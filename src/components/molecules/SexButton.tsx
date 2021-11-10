import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .sex {
    font-size: 0.8rem;
    padding: 5px 0;
  }
  div {
    display: flex;
    width: 100%;
    height: 35px;
    justify-content: space-between;
    align-items: center;
    padding-right: 5%;

    label {
      input {
        margin: 0 5px;
      }
    }
  }
`;

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

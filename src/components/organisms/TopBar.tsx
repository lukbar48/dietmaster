import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 60px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.lightBlack};

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: 1rem;
  }

`;

const TopBar = () => {
  return (
    <Wrapper>
      <div>
        <h2>Patients record</h2>
      </div>
      <Input placeholder="Search patient" />
      <Button>New patient</Button>
      <Button color='#505050' marginLeft="auto">Log Out</Button>
    </Wrapper>
  );
};

export default TopBar;

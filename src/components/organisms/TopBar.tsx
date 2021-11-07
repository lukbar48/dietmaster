import React from 'react';
import { useNavigate } from "react-router-dom";
import { Input } from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
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
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/patient')
  }

  return (
    <Wrapper>
      <div>
        <h2>Patients record</h2>
      </div>
      <Input placeholder="Search patient" />
      <Button onClick={handleClick}>New patient</Button>
      <Button backgroundColor="#505050" marginLeft="auto">
        Log Out
      </Button>
    </Wrapper>
  );
};

export default TopBar;

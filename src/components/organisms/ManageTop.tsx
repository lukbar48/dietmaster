import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  height: 35px;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.blue3};
`;

const ManageTop = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      <Button onClick={handleClick} backgroundColor="#00A3D9" padding="6px 18px" fontSize="12px">
        Save changes
      </Button>
      <Button onClick={handleClick} backgroundColor="#505050" padding="6px 28px" fontSize="12px">
        Discard
      </Button>
    </Wrapper>
  );
};

export default ManageTop;

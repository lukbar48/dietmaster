import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import ManageNavBar from 'components/organisms/ManageNavBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  min-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.black};
`;

const ManageTop = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  height: 35px;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.blue3};
`;

const Manage = () => {
  return (
    <>
      <Wrapper>
        <ManageTop>
          <Button backgroundColor="#505050" padding="6px 18px" fontSize="12px">
            Close and reject
          </Button>
          <Button backgroundColor="#00a3d9" padding="6px 18px" fontSize="12px">
            Save changes
          </Button>
        </ManageTop>
        <ManageNavBar />
      </Wrapper>
    </>
  );
};

export default Manage;

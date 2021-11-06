import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.grey4};
  padding: 0 20px 2px;

  p {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.white};
  }

  .filterSex {
    display: flex;
    flex-direction: column;

    .buttons {
      display: flex;
      gap: 2px;
    }
  }
`;

const BottomBar = () => {
  return (
    <Wrapper>
      <div className="filterSex">
        <p>Sex</p>
        <div className="buttons">
          <Button padding="6px 20px" borderRadius="6px 0 0 6px">
            off
          </Button>
          <Button padding="6px 20px" borderRadius="0">
            female
          </Button>
          <Button padding="6px 20px" borderRadius="0 6px 6px 0">
            male
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default BottomBar;

import styled from 'styled-components';

export const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 5% 20% 20% 10% 15% 30%;
  align-items: center;
  gap: 2px;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.grey1};
  padding: 5px;
  color: ${({ theme }) => theme.colors.black};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buttons {
    grid-column: 6/7;
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    height: 100%;
  }
`;

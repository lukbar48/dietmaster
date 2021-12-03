import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  button {
    width: 100px;
    background-color: ${({ theme }) => theme.colors.grey4};
  }
`;

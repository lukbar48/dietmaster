import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.lightBlack};

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: 1rem;
  }
`;

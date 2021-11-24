import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  height: 40px;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.blue3};
`;

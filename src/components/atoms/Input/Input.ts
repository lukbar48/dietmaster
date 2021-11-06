import styled from 'styled-components';

export const Input = styled.input`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.grey4};
  color: ${({ theme }) => theme.colors.white};
`;

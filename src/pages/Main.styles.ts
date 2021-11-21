import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 2px;
  width: 100%;
  margin: 60px 0;
  list-style: none;
  color: ${({ theme }) => theme.colors.black};
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  min-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.black};
`;

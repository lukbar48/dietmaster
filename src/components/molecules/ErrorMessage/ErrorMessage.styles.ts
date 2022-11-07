import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div<{ type: 'success' | 'error' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 100px;
  border-radius: 5px;
  border: 2px solid ${({ type }) => theme.colors[type === 'success' ? 'green' : 'red']};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.grey1};

  h4 {
    margin: 15px;
  }

  p {
    margin-bottom: 15px;
  }
`;

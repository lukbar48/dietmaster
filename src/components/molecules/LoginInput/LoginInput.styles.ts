import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Input = styled.input`
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px;
  margin: 10px 0;
  border-radius: 6px;
  border: none;
`;
export const Label = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.xm};
`;

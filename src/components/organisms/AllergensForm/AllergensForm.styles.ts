import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
 
  h3 {
    text-align: center;
    margin: 10px 0;
    font-weight: 400;
  }
  p {
    text-align: center;
    margin: 10px 0;
    font-size: ${({ theme }) => theme.fontSizes.xm};
  }
`;

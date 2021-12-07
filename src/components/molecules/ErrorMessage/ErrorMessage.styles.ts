import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 100px;
  border-radius: 5px;
  border: 2px solid #d90000;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.grey1};

  h4 {
    margin: 15px;
  }

  p {
    margin-bottom: 15px;
  }
`;

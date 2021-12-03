import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.blue2};
  color: white;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.grey1};
  gap: 15px;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: ${({ theme }) => theme.fontSizes.xm};
  }
  input {
    border: none;
    padding: 0 5px;
    height: 32px;
    font-size: ${({ theme }) => theme.fontSizes.xm};
    border-radius: 5px;
  }

  button {
    margin-top: 8px;
    width: 200px;
    align-self: center;
  }

  h3 {
    text-align: center;
    font-weight: 500;
    margin: 10px 0;
  }
`;

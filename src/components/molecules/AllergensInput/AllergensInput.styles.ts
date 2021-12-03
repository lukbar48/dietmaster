import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    padding-left: 5px;
    padding-right: 40px;
    font-size: 1rem;
    line-height: 1rem;
    border: none;
    border-radius: 5px;
    background-color: white;
  }

  input::placeholder {
    padding-left: 5px;
    font-size: ${({ theme }) => theme.fontSizes.xm};
  }
  div {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

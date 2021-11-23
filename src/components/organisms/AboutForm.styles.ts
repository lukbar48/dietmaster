import styled from 'styled-components';

export const Wrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 10px;
  padding: 15px;
  width: 100%;
  min-height: calc(100vh - 175px);
  background-color: ${({ theme }) => theme.colors.grey1};

  div:nth-child(1) {
    grid-area: 1/1/2/3;
  }
  div:nth-child(2) {
    grid-area: 1/3/2/5;
  }
  div:nth-child(3) {
    grid-area: 1/5/2/6;
  }
  div:nth-child(4) {
    grid-area: 1/6/2/7;
  }
  div:nth-child(5) {
    grid-area: 2/1/3/2;
  }
  div:nth-child(6) {
    grid-area: 2/2/3/3;
  }
  div:nth-child(7) {
    grid-area: 2/3/3/5;
  }
  div:nth-child(8) {
    grid-area: 2/5/3/7;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  label {
    font-size: 0.8rem;
    padding: 5px 0;
  }

  input {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0 10px;
    -webkit-appearance: none;
  }
  
`;

export const TextArea = styled.div`
  width: 100%;
  grid-area: 3/1/4/5;

  label {
    font-size: 0.8rem;
    padding: 5px 0;
  }
  textarea {
    width: 100%;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    height: 100px;
    font-family: 'Montserrat', sans-serif;
    margin-top: 5px;
  }
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-area: 4/1/5/7;
 
  p {
    font-size: 0.8rem;
    padding: 5px 0;
  }
  input {
    width: 100%;
    -webkit-appearance: none;
    margin: 7px 0;
  }
  .minmax {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  input::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.blue3};
    border-radius: 3px;
  }

  input::-webkit-slider-thumb {
    height: 22px;
    width: 15px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.grey4};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6.5px;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  min-height: calc(100vh - 75px);
  background-color: ${({ theme }) => theme.colors.grey1};
`;
export const Sliders = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;

export const SliderDesc = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 70px;
  margin-top: -10px;
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h4 {
    margin: 2px 0 5px;
    font-weight: 400;
  }
`;

export const SliderInput = styled.div`
  display: flex;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.grey4};
    width: 60px;
    height: 30px;
    border-radius: 5px;
    margin-right: 14px;
    color: white;
    overflow: hidden;
  }

  input {
    width: 100%;
    -webkit-appearance: none;
    margin: 10px 0;
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
    height: 25px;
    width: 15px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.grey4};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }

  .blue::-webkit-slider-runnable-track {
    background: ${({ theme }) => theme.colors.blue3};
  }
  .red::-webkit-slider-runnable-track {
    background: ${({ theme }) => theme.colors.red};
  }
  .yellow::-webkit-slider-runnable-track {
    background: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Input = styled.input`
  width: 100%;
`;

export const CPMWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const ShowCPM = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: column;
  text-align: center;
  height: 75px;
  width: 200px;
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.grey4};
  font-size: ${({ theme }) => theme.fontSizes.xm};
  color: white;

  input {
    border: none;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSizes.l};
    padding: 5px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.white};
  }
  div {
    font-size: ${({ theme }) => theme.fontSizes.l};
    padding: 5px;
  }
`;

export const MicronutrientsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 5px 0;
`;

export const MicronutrientsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
`;

export const Nutrient = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;

  input {
    text-align: right;
    background-color: ${({ theme }) => theme.colors.white};
    width: 60px;
    height: 21px;
    border-radius: 3px;
    padding: 2px 6px;
    border: none;
  }
`;

import { PatientContext } from 'contexts/PatientContext';
import useCalculate from 'hooks/useCalculate';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  min-height: calc(100vh - 75px);
  background-color: ${({ theme }) => theme.colors.grey1};
`;
const Sliders = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;

const SliderDesc = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CPMWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const ShowCPM = styled.div`
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

const DietForm = () => {
  const { patient } = useContext(PatientContext);
  const { calculateCPM } = useCalculate(patient);
  const [establishCPM, setEstablishCPM] = useState(calculateCPM());
  const [protein, setProtein] = useState(5);
  const [fat, setFat] = useState(22);
  const [carbs, setCarbs] = useState(57);

  const handleCPMInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEstablishCPM(e.currentTarget.value);
  };

  const handleSliderChange = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.target);
  };

  return (
    <Wrapper>
      <CPMWrapper>
        <ShowCPM>
          <p>Recommended CPM</p>
          <div>{calculateCPM()}</div>
        </ShowCPM>
        <ShowCPM>
          <p>Established CPM</p>
          <input type="text" value={establishCPM} onChange={(e) => handleCPMInputChange(e)} />
        </ShowCPM>
      </CPMWrapper>
      <Sliders onChange={(e) => handleSliderChange(e)}>
        <SliderDesc>
          <p>0%</p>
          <p>100%</p>
        </SliderDesc>
        <SliderWrapper>
          <h4>Protein</h4>
          <input
            id="protein"
            name="protein"
            type="range"
            min="1"
            max="100"
            step="1"
            value={protein}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProtein(Number(e.currentTarget.value))}
          />
        </SliderWrapper>
        <SliderWrapper>
          <h4>Fat</h4>
          <input
            id="fat"
            name="fat"
            type="range"
            min="1"
            max="100"
            step="1"
            value={fat}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFat(Number(e.currentTarget.value))}
          />
        </SliderWrapper>
        <SliderWrapper>
          <h4>Carbohydrates</h4>
          <input
            id="carbs"
            name="carbs"
            type="range"
            min="1"
            max="100"
            step="1"
            value={carbs}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCarbs(Number(e.currentTarget.value))}
          />
        </SliderWrapper>
      </Sliders>
    </Wrapper>
  );
};

export default DietForm;

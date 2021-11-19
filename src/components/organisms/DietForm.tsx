import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  min-height: calc(100vh - 85px);
  background-color: ${({ theme }) => theme.colors.grey1};
`;
const Sliders = styled.div`
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

const CPM = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  div {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
  }
`;

const DietForm = () => {
  return (
    <Wrapper>
      <CPM>
        <div>
          <p>Recommended CPM</p>
          <div>2500</div>
        </div>
        <div>
          <p>Established CPM</p>
          <input type="text" />
        </div>
      </CPM>
      <Sliders>
        <SliderDesc>
          <p>0%</p>
          <p>100%</p>
        </SliderDesc>
        <SliderWrapper>
          <h4>Protein</h4>
          <input id="protein" name="protein" type="range" min="1" max="100" step="1" />
        </SliderWrapper>
        <SliderWrapper>
          <h4>Fat</h4>
          <input id="fat" name="fat" type="range" min="1" max="100" step="1" />
        </SliderWrapper>
        <SliderWrapper>
          <h4>Carbohydrates</h4>
          <input id="carbs" name="carbs" type="range" min="1" max="100" step="1" />
        </SliderWrapper>
      </Sliders>
    </Wrapper>
  );
};

export default DietForm;

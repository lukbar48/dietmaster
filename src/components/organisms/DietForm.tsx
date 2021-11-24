import { PatientContext } from 'contexts/PatientContext';
import useCalculate from 'hooks/useCalculate';
import React, { useContext, useState } from 'react';
import {
  Nutrient,
  CPMWrapper,
  Input,
  MicronutrientsColumn,
  MicronutrientsWrapper,
  ShowCPM,
  SliderDesc,
  SliderInput,
  Sliders,
  SliderWrapper,
  Wrapper,
} from './DietForm.styles';

const DietForm = () => {
  const { patient } = useContext(PatientContext);
  const { calculateCPM } = useCalculate(patient);
  const [establishCPM, setEstablishCPM] = useState(calculateCPM());
  const [protein, setProtein] = useState(22);
  const [fat, setFat] = useState(18);
  const [carbs, setCarbs] = useState(56);

  const handleCPMInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEstablishCPM(e.currentTarget.value);
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
      <Sliders>
        <SliderWrapper>
          <h4>Protein</h4>
          <SliderInput>
            <div>{`${((Number(establishCPM) * protein) / 400).toFixed()}g`}</div>
            <input
              className="red"
              id="protein"
              name="protein"
              type="range"
              min="1"
              max="100"
              step="1"
              value={protein}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProtein(Number(e.currentTarget.value))}
            />
          </SliderInput>
        </SliderWrapper>
        <SliderWrapper>
          <h4>Fat</h4>
          <SliderInput>
            <div>{`${((Number(establishCPM) * fat) / 900).toFixed()}g`}</div>
            <input
              className="yellow"
              id="fat"
              name="fat"
              type="range"
              min="1"
              max="100"
              step="1"
              value={fat}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFat(Number(e.currentTarget.value))}
            />
          </SliderInput>
        </SliderWrapper>
        <SliderWrapper>
          <h4>Carbohydrates</h4>
          <SliderInput>
            <div>{`${((Number(establishCPM) * carbs) / 400).toFixed()}g`}</div>
            <Input
              className="blue"
              id="carbs"
              name="carbs"
              type="range"
              min="1"
              max="100"
              step="1"
              value={carbs}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCarbs(Number(e.currentTarget.value))}
            />
          </SliderInput>
        </SliderWrapper>
        <SliderDesc>
          <p>0%</p>
          <p>100%</p>
        </SliderDesc>
      </Sliders>
      <MicronutrientsWrapper>
        <MicronutrientsColumn>
          <Nutrient>
            <p>fiber [g]</p>
            <input type="text" value="20" />
          </Nutrient>
          <Nutrient>
            <p>sugar [g]</p>
            <input type="text" value="42.5" />
          </Nutrient>
          <Nutrient>
            <p>SFA [g]</p>
            <input type="text" value="9.8" />
          </Nutrient>
          <Nutrient>
            <p>MUFA [g]</p>
            <input type="text" value="29" />
          </Nutrient>
          <Nutrient>
            <p>PUFA [g]</p>
            <input type="text" value="16.1" />
          </Nutrient>
          <Nutrient>
            <p>omega-3 [g]</p>
            <input type="text" value="1.9" />
          </Nutrient>
          <Nutrient>
            <p>omega-6 [g]</p>
            <input type="text" value="4.6" />
          </Nutrient>
          <Nutrient>
            <p>cholesterol [mg]</p>
            <input type="text" value="300" />
          </Nutrient>
        </MicronutrientsColumn>
        <MicronutrientsColumn>
          <Nutrient>
            <p>sodium [mg]</p>
            <input type="text" value="1300" />
          </Nutrient>
          <Nutrient>
            <p>potassium [mg]</p>
            <input type="text" value="3500" />
          </Nutrient>
          <Nutrient>
            <p>calcium [mg]</p>
            <input type="text" value="1200" />
          </Nutrient>
          <Nutrient>
            <p>phosphorus [mg]</p>
            <input type="text" value="700" />
          </Nutrient>
          <Nutrient>
            <p>magnesium [mg]</p>
            <input type="text" value="320" />
          </Nutrient>
          <Nutrient>
            <p>iron [mg]</p>
            <input type="text" value="10" />
          </Nutrient>
          <Nutrient>
            <p>zinc [mg]</p>
            <input type="text" value="8" />
          </Nutrient>
          <Nutrient>
            <p>copper [mg]</p>
            <input type="text" value="0.9" />
          </Nutrient>
        </MicronutrientsColumn>
        <MicronutrientsColumn>
          <Nutrient>
            <p>vit. A [µg]</p>
            <input type="text" value="700" />
          </Nutrient>
          <Nutrient>
            <p>vit. D [µg]</p>
            <input type="text" value="15" />
          </Nutrient>
          <Nutrient>
            <p>vit. E [mg]</p>
            <input type="text" value="8" />
          </Nutrient>
          <Nutrient>
            <p>vit. K [µg]</p>
            <input type="text" value="90" />
          </Nutrient>
          <Nutrient>
            <p>vit. B1 [mg]</p>
            <input type="text" value="1.1" />
          </Nutrient>
          <Nutrient>
            <p>vit. B6 [mg]</p>
            <input type="text" value="1.5" />
          </Nutrient>
          <Nutrient>
            <p>vit. B12 [mg]</p>
            <input type="text" value="2.4" />
          </Nutrient>
          <Nutrient>
            <p>vit. C [mg]</p>
            <input type='text' value='75' />
          </Nutrient>
        </MicronutrientsColumn>
      </MicronutrientsWrapper>
    </Wrapper>
  );
};

export default DietForm;

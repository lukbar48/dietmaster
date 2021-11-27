import { PatientContext } from 'contexts/PatientContext';
import useCalculate from 'hooks/useCalculate';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPatient } from 'store/store';
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
  const { id } = useParams();
  const { patient, setPatient } = useContext(PatientContext);
  const { calculateCPM } = useCalculate(patient);
  const caloriesValue = useRef<HTMLInputElement>(null);
  const proteinValue = useRef<HTMLInputElement>(null);
  const fatValue = useRef<HTMLInputElement>(null);
  const carbsValue = useRef<HTMLInputElement>(null);

  const patientsList = useSelector((state: any) => state.patientsList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const getPatient = patientsList.filter((patient: any) => patient.id === Number(id));
      setPatient(getPatient[0]);

      if (proteinValue.current) {
        proteinValue.current.value = patient.protein;
      }
      if (carbsValue.current) {
        carbsValue.current.value = patient.carbs;
      }
      if (fatValue.current) {
        fatValue.current.value = patient.fat;
      }
      if (caloriesValue.current) {
        caloriesValue.current.value = patient.calories;
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(addNewPatient(patient));
  }, [patient]);

  return (
    <Wrapper onChange={handleChange}>
      <CPMWrapper>
        <ShowCPM>
          <p>Recommended CPM</p>
          <div>{patient.bodymass && patient.age && patient.height && `${calculateCPM()} kcal`}</div>
        </ShowCPM>
        <ShowCPM>
          <p>Energy deficit / surplus</p>
          <input id="calories" name="calories" type="number" ref={caloriesValue} />
        </ShowCPM>
        <ShowCPM>
          <p>Established CPM</p>
          <div>{patient.bodymass && patient.age && patient.height && `${Number(calculateCPM()) + Number(patient.calories)} kcal`}</div>
        </ShowCPM>
      </CPMWrapper>
      <Sliders>
        <SliderWrapper>
          <h4>Protein</h4>
          <SliderInput>
            <div>{patient.bodymass && patient.age && patient.height && `${(((Number(calculateCPM()) + Number(patient.calories)) * Number(patient.protein)) / 400).toFixed()}g`}</div>
            <input className="red" id="protein" name="protein" type="range" min="1" max="100" step="1" ref={proteinValue} />
          </SliderInput>
        </SliderWrapper>
        <SliderWrapper>
          <h4>Fat</h4>
          <SliderInput>
            <div>{patient.bodymass && patient.age && patient.height && `${(((Number(calculateCPM()) + Number(patient.calories)) * Number(patient.fat)) / 900).toFixed()}g`}</div>
            <input className="yellow" id="fat" name="fat" type="range" min="1" max="100" step="1" ref={fatValue} />
          </SliderInput>
        </SliderWrapper>
        <SliderWrapper>
          <h4>Carbohydrates</h4>
          <SliderInput>
            <div>{patient.bodymass && patient.age && patient.height && `${(((Number(calculateCPM()) + Number(patient.calories)) * Number(patient.carbs)) / 400).toFixed()}g`}</div>
            <Input className="blue" id="carbs" name="carbs" type="range" min="1" max="100" step="1" ref={carbsValue} />
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
            <input type="text" value="20" readOnly />
          </Nutrient>
          <Nutrient>
            <p>sugar [g]</p>
            <input type="text" value="42.5" readOnly />
          </Nutrient>
          <Nutrient>
            <p>SFA [g]</p>
            <input type="text" value="9.8" readOnly />
          </Nutrient>
          <Nutrient>
            <p>MUFA [g]</p>
            <input type="text" value="29" readOnly />
          </Nutrient>
          <Nutrient>
            <p>PUFA [g]</p>
            <input type="text" value="16.1" readOnly />
          </Nutrient>
          <Nutrient>
            <p>omega-3 [g]</p>
            <input type="text" value="1.9" readOnly />
          </Nutrient>
          <Nutrient>
            <p>omega-6 [g]</p>
            <input type="text" value="4.6" readOnly />
          </Nutrient>
          <Nutrient>
            <p>cholesterol [mg]</p>
            <input type="text" value="300" readOnly />
          </Nutrient>
        </MicronutrientsColumn>
        <MicronutrientsColumn>
          <Nutrient>
            <p>sodium [mg]</p>
            <input type="text" value="1300" readOnly />
          </Nutrient>
          <Nutrient>
            <p>potassium [mg]</p>
            <input type="text" value="3500" readOnly />
          </Nutrient>
          <Nutrient>
            <p>calcium [mg]</p>
            <input type="text" value="1200" readOnly />
          </Nutrient>
          <Nutrient>
            <p>phosphorus [mg]</p>
            <input type="text" value="700" readOnly />
          </Nutrient>
          <Nutrient>
            <p>magnesium [mg]</p>
            <input type="text" value="320" readOnly />
          </Nutrient>
          <Nutrient>
            <p>iron [mg]</p>
            <input type="text" value="10" readOnly />
          </Nutrient>
          <Nutrient>
            <p>zinc [mg]</p>
            <input type="text" value="8" readOnly />
          </Nutrient>
          <Nutrient>
            <p>copper [mg]</p>
            <input type="text" value="0.9" readOnly />
          </Nutrient>
        </MicronutrientsColumn>
        <MicronutrientsColumn>
          <Nutrient>
            <p>vit. A [µg]</p>
            <input type="text" value="700" readOnly />
          </Nutrient>
          <Nutrient>
            <p>vit. D [µg]</p>
            <input type="text" value="15" readOnly />
          </Nutrient>
          <Nutrient>
            <p>vit. E [mg]</p>
            <input type="text" value="8" readOnly />
          </Nutrient>
          <Nutrient>
            <p>vit. K [µg]</p>
            <input type="text" value="90" readOnly />
          </Nutrient>
          <Nutrient>
            <p>vit. B1 [mg]</p>
            <input type="text" value="1.1" readOnly />
          </Nutrient>
          <Nutrient>
            <p>vit. B6 [mg]</p>
            <input type="text" value="1.5" readOnly />
          </Nutrient>
          <Nutrient>
            <p>vit. B12 [mg]</p>
            <input type="text" value="2.4" readOnly />
          </Nutrient>
          <Nutrient>
            <p>vit. C [mg]</p>
            <input type="text" value="75" readOnly />
          </Nutrient>
        </MicronutrientsColumn>
      </MicronutrientsWrapper>
    </Wrapper>
  );
};

export default DietForm;

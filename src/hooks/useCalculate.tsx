import { PatientType } from 'types/types';

const useCalculate = (patient: PatientType) => {
  const calculateBMI = () => {
    const height = Number(patient?.height) / 100;
    const BMI = (Number(patient?.bodymass) / Math.pow(height, 2)).toFixed(2).toString();
    return BMI;
  };

  const BMIdescription = () => {
    const height = Number(patient?.height) / 100;
    let BMI = Number((Number(patient?.bodymass) / Math.pow(height, 2)).toFixed(2));
    if (BMI < 25 && BMI > 18.5) {
      return 'Normal';
    } else if (BMI >= 25) {
      return 'Obesity';
    } else if (BMI <= 18.5) {
      return 'Underweight';
    } else {
      return 'OK';
    }
  };

  const calculateRisk = () => {
    const height = Number(patient?.height) / 100;
    let BMI = Number((Number(patient?.bodymass) / Math.pow(height, 2)).toFixed(2));
    if (BMI < 25 && BMI > 18.5) {
      return 'Lowest';
    } else if (BMI >= 25 && BMI <= 35) {
      return 'High';
    } else if (BMI >= 35) {
      return 'Very high';
    } else if (BMI <= 18.5) {
      return 'High';
    } else {
      return 'OK';
    }
  };

  const idealWeight = () => {
    const height = Number(patient?.height);
    let idealWeightMin = '';
    let idealWeightMax = '';
    if (patient?.sex === 'Male') {
      idealWeightMin = (height - 100 - (height - 138) / 4).toString();
      idealWeightMax = (height - 100 - (height - 162) / 4).toString();
    } else {
      idealWeightMin = (height - 100 - (height - 138) / 2).toString();
      idealWeightMax = (height - 100 - (height - 162) / 2).toString();
    }

    return `${idealWeightMin} - ${idealWeightMax} kg`;
  };

  const calculateCPM = () => {
    const CPM =
      (66.5 + 13.75 * Number(patient?.bodymass) + 5.003 * Number(patient?.height) - 6.775 * Number(patient?.age)) * Number(patient?.activity);
    return CPM.toFixed().toString();
  };

  return { calculateBMI, BMIdescription, calculateRisk, idealWeight, calculateCPM };
};

export default useCalculate;

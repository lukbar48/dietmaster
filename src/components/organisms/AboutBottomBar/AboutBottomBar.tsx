import AboutBottomBarBox from 'components/atoms/AboutBottomBarBox/AboutBottomBarBox';
import useCalculate from 'hooks/useCalculate';
import { useSelector } from 'react-redux';
import { Calc, CalculationsWrapper, Wrapper } from './AboutBottomBar.styles';

const AboutBottomBar = () => {
  const patient = useSelector((state: any) => state.patient);
  const { BMIdescription, calculateBMI, calculateRisk, idealWeight } = useCalculate(patient);

  if (!patient) return null;

  return (
    <Wrapper>
      <div className="text">Body weight assessment</div>
      <CalculationsWrapper>
        <Calc>
          <p>BMI</p>
          <AboutBottomBarBox>{patient.bodymass && patient.height ? calculateBMI() : ''}</AboutBottomBarBox>
        </Calc>
        <Calc>
          <p>Description</p>
          <AboutBottomBarBox>{patient.bodymass && patient.height ? BMIdescription() : ''}</AboutBottomBarBox>
        </Calc>
        <Calc>
          <p>Risk of cardiovascular disease</p>
          <AboutBottomBarBox>{patient.bodymass && patient.height ? calculateRisk() : ''}</AboutBottomBarBox>
        </Calc>
        <Calc>
          <p>Ideal body weight</p>
          <AboutBottomBarBox>{patient.bodymass && patient.height ? idealWeight() : ''}</AboutBottomBarBox>
        </Calc>
      </CalculationsWrapper>
    </Wrapper>
  );
};

export default AboutBottomBar;

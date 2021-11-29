import BloodTestsForm from 'components/organisms/BloodTestsForm/BloodTestsForm';
import ManageNavBar from 'components/organisms/ManageNavBar/ManageNavBar';
import ManageTop from 'components/organisms/ManageTop/ManageTop';
import { Wrapper } from './About.styles';

const BloodTests = () => {
  return (
    <Wrapper>
      <ManageTop />
      <ManageNavBar />
      <BloodTestsForm /> 
    </Wrapper>
  );
};

export default BloodTests;
